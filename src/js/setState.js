const createNewState = (data, state, firstcall) => {
  const newState = {
    title: data.title,
    transcript: data.transcript,
    currentSlideUrl: data.img,
    current: data.num,
    prev: data.num - 1,
    next: data.num + 1,
    date: new Date(
      data.year,
      data.month - 1,
      data.day,
    ),
    last: (firstcall ? data.num : state.last),
  };

  return newState;
};

export default createNewState;
