export default function refactorData(data) {
    return data.map(item => {
        return { id: item.id, name: `User : ${item.name}`, email: item.email }
    })
}