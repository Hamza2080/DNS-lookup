const dns = require('dns');
const { promisify } = require('util');
const dnsresolve = promisify(dns.resolve4);

module.exports.dnsResolver = async(request, response) => {
    const { dns } = request.query;
    try {
        const addresses = await dnsresolve(dns);
        response.json({ success: true, addresses });
    } catch (error) {
        response.json({ success: false })
    }

}