# Configuración del servidor MCP de context7

## Estado actual

Actualmente tienes configurado el servidor MCP de Magic UI Design en tu proyecto.

## Configuración necesaria para context7

Necesitas agregar el servidor MCP de context7 a tu archivo `.claude/mcp.json`. La configuración debe ser:

```json
{
    "mcpServers": {
        "@magicuidesign/mcp": {
            "command": "npx",
            "args": ["-y", "@magicuidesign/mcp@latest"]
        },
        "context7": {
            "type": "http",
            "url": "https://mcp.context7.com/mcp",
            "headers": {
                "CONTEXT7_API_KEY": "ctx7sk-47e78f6f-c0f4-41e3-aa2e-8ad1dbddb256"
            }
        }
    }
}
```

## Pasos para actualizar la configuración

1. Abre el archivo `.claude/mcp.json`
2. Reemplaza el contenido actual con la configuración anterior que incluye ambos servidores
3. Guarda el archivo
4. Reinicia Claude Code o recarga la configuración de MCP

## Verificación

Después de actualizar la configuración, deberías poder acceder a las herramientas y funciones proporcionadas por el servidor MCP de context7.

## Notas de seguridad

-   La API key proporcionada es sensible y no debería ser compartida públicamente
-   Considera usar variables de entorno para la API key en entornos de producción
