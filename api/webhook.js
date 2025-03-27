export default async function handler(req, res) {
    if (req.method === 'POST') {
        const clientId = '8eb79fff-4794-4375-847b-b2487f5ae7d8';
        const clientSecret = 'hopszCKsQSB0Y8f+SE9YygpuC8QKHvG1albZSHP/7DIynFkuHWaWdUEMTeBXwLzW819Ir7Rx47Qi8EJmoTLMXCLT62bGLQe7SFJ+1Gjo91jiCH+Qo4wft/ZsXclo3avP7ePqGPzYkNLL4zw4IJHjExCPUkHLGZLFTBfIy75x8Cc';
        const tokenUrl = 'https://oauth.livepix.gg/oauth2/token';

        try {
            console.log(`[${new Date().toISOString()}] Iniciando requisição para obter o token...`);
            const response = await fetch(tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'grant_type': 'client_credentials',
                    'client_id': clientId,
                    'client_secret': clientSecret,
                    'scope': 'account:read wallet:read webhooks',
                }),
            });

            console.log(`[${new Date().toISOString()}] Resposta da API Livepix:`, response.status, response.statusText);

            if (!response.ok) {
                throw new Error(`Erro ao obter o token: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            console.log(`[${new Date().toISOString()}] Token gerado com sucesso: ${data.access_token}`);
            res.status(200).json({ token: data.access_token });
        } catch (error) {
            console.error(`[${new Date().toISOString()}] Erro ao obter o token:`, error.message);
            res.status(500).json({ message: 'Erro ao obter o token', error: error.message });
        }
    } else {
        console.log(`[${new Date().toISOString()}] Método não permitido: ${req.method}`);
        res.status(405).json({ message: 'Método não permitido. Use POST.' });
    }
}
