function formatReview(reviewStr: any) {
  const [title, dis] = reviewStr.split("/");
  return {
    title,
    dis,
  };
}

export function extractAdavatages(data: any) {
  const Data: any = [];
  if (!data) {
    return Data;
  }
  ["advone", "advtwo", "advthree"].forEach((key) => {
    if (data[key]) {
      Data.push(formatReview(data[key]));
    }
  });

  return Data;
}
