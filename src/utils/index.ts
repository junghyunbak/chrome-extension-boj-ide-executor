export function getBaekjoonProblemNumber(url: string) {
  const tmp = /^https:\/\/www.acmicpc.net\/problem\/([0-9]+)/.exec(url);

  if (!tmp) {
    return null;
  }

  const problemNumber = +tmp[1];

  if (Number.isNaN(problemNumber)) {
    return;
  }

  return problemNumber;
}
