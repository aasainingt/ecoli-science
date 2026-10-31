import { NextRequest } from 'next/server';
import { LLMClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

const SYSTEM_PROMPT = `你是一位专业的微生物学科普助手，专注于解答关于大肠埃希菌（Escherichia coli，简称大肠杆菌）的各种问题。

你的知识范围包括：
- 大肠埃希菌的基本生物学特性（形态、结构、分类）
- 致病机制与致病性大肠杆菌的类型（ETEC、EPEC、EHEC、EIEC、EAEC、ExPEC）
- 传播途径与感染源
- 预防措施与公共卫生策略
- 临床治疗方法与抗生素耐药性
- 最新研究进展（合成生物学、CRISPR、微生物组学等）

回答规范：
1. 使用准确、专业的科学术语，但同时确保通俗易懂
2. 回答要结构清晰，适当使用分点列举
3. 涉及医学建议时，提醒用户咨询专业医生
4. 如果问题超出大肠埃希菌相关范围，礼貌地引导回主题
5. 回答语言为中文`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new LLMClient(config, customHeaders);

    const chatMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...messages,
    ];

    const stream = client.stream(chatMessages, {
      model: 'doubao-seed-2-0-lite-260215',
      temperature: 0.7,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.content) {
              const data = `data: ${JSON.stringify({ content: chunk.content.toString() })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          const errorMsg =
            error instanceof Error ? error.message : 'Unknown error';
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: errorMsg })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'Internal server error';
    return Response.json({ error: errorMsg }, { status: 500 });
  }
}
