const createNewState = (data) => {
  const newState = {
    title: data.title,
    transcript: data.transcript,
    currentSlideUrl: data.img,
    numberOfLastSlide: data.num,
    date: new Date(
      data.year,
      data.month - 1,
      data.day,
    ),
  };

  return newState;
};

export default createNewState;
