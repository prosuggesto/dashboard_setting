export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Build the precise expected payload structure
        const payload = {
            userid: req.body.userid,
            mail: req.body.mail,
            date: req.body.date,
            type: 'setter',
            Name: req.body.Name,
            setter: req.body.setter
        };

        const response = await fetch('https://n8n.srv862127.hstgr.cloud/webhook/setting_converti_humain', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'setter_humain': 'setter_humain.01'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Webhook error', message: err.message });
    }
}
