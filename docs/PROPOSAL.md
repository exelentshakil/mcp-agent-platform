hi Nick, i built a working mcp agent platform with live tool execution for you: https://mcp-agent-platform-psi.vercel.app
code: https://github.com/exelentshakil/mcp-agent-platform | portfolio: https://shakilhq.com

i set up the demo around real mcp tool execution rather than a basic chat loop:
- it connects stdio and sse mcp servers (postgres, stripe, github) and auto-discovers tool schemas.
- it runs multi-step openai tool calling loops to break requests into validated json parameters.
- it enforces human-in-the-loop gates so agents can query databases without executing rogue writes.
- it pairs next.js 15 app router with a modular nestjs and postgresql backend.

my rate is $35/hr. for the first 2 weeks, we can connect your existing mcp server, set up the agent tool calling loop, and wire the next.js dashboard with live websocket streaming.

which transport is your existing mcp server currently running (stdio, sse, or http streaming)?

best,
Shak
