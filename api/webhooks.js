export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(`[${new Date().toISOString()}] Webhook recebido:`, req.body);
        res.status(200).json({ message: 'Webhook processado com sucesso!', data: req.body });
    } else {
        console.log(`[${new Date().toISOString()}] Método não permitido:`, req.method);
        res.status(405).json({ message: 'Método não permitido. Use POST.' });
    }
}
