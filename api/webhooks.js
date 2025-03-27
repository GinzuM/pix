export default function handler(req, res) {
    console.log(`[${new Date().toISOString()}] Requisição recebida:`, {
        method: req.method,
        body: req.body,
    });

    if (req.method === 'POST') {
        try {
            const evento = req.body; // Captura o corpo do webhook
            console.log(`[${new Date().toISOString()}] Dados do Webhook:`, evento);

            // Responda ao Livepix confirmando o recebimento
            res.status(200).json({ message: 'Webhook processado com sucesso!', data: evento });
        } catch (error) {
            console.error(`[${new Date().toISOString()}] Erro ao processar webhook:`, error);
            res.status(500).json({ message: 'Erro interno ao processar webhook.' });
        }
    } else {
        console.log(`[${new Date().toISOString()}] Método não permitido:`, req.method);
        res.status(405).json({ message: 'Método não permitido. Use POST.' });
    }
}
