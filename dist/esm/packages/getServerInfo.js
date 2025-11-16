export async function getServerInfo(userAgent) {
    const data = await fetch(`https://${this.domain}/api/serverinfo-api`, {
        method: "GET",
        headers: {
            "User-Agent": userAgent,
        },
    }).then((res) => res.json());
    return data;
}
