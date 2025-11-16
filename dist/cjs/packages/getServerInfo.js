"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerInfo = getServerInfo;
async function getServerInfo(userAgent) {
    const data = await fetch(`https://${this.domain}/api/serverinfo-api`, {
        method: "GET",
        headers: {
            "User-Agent": userAgent,
        },
    }).then((res) => res.json());
    return data;
}
