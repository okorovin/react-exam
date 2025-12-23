const metrosList = [
  {
    name: 'Арбатская',
    code: 'Arbat',
  },
  {
    name: 'Александровский сад',
    code: 'Alexanders Garden',
  },
  {
    name: 'Московская',
    code: 'Moscow',
  },
  {
    name: 'Парк Культуры',
    code: 'Culture',
  },
  {
    name: 'Театральная',
    code: 'Theater',
  },
];

export const metrosMap = metrosList.reduce((res, { name, code }) => {
  res[code] = name;
  return res;
}, {});

export default metrosList;
