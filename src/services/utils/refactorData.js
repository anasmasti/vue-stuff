export default function refactorData(data) {
  return data.map((item, index) => {
    return {
      id: item.id,
      name: `User ${index + 1} : ${item.name}`,
      email: item.email,
    };
  });
}
