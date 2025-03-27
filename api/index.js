export default function handler(req, res) {
    if (req.method === 'POST') {
        const evento = req.body; // Pega os dados do webhook
        console.log('Webhook recebido:', evento); // Log para depuração

        // Responde com sucesso ao Livepix
        res.status(200).json({ message: 'Webhook processado com sucesso!', data: evento });
    } else {
        // Retorna erro para outros métodos além de POST
        res.status(405).json({ message: 'Método não permitido. Use POST.' });
    }
}
