function formatReview(reviewStr: any) {
  const [rating, client_name, date, description] = reviewStr.split("/");
  const formattedDate = date.replace(/\./g, "/");
  return {
    client_name,
    description,
    rating: parseInt(rating),
    date: formattedDate,
  };
}

export function extractTestimonials(data: any) {
  const testimonialsData: any = [];
  if (!data) {
    return testimonialsData;
  }
  ["reviewone", "reviewtwo", "reviewthree"].forEach((key) => {
    if (data[key]) {
      testimonialsData.push(formatReview(data[key]));
    }
  });

  return testimonialsData;
}
