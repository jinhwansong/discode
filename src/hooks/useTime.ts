export default function useTime(time: string) {
  const targetTime = new Date(time).getTime();
  const currentTime = new Date().getTime();
  const differentTime = Math.floor(Number(currentTime - targetTime) / 1000);
  if (differentTime < 60) {
    return `${differentTime}초 전`;
  } else if (differentTime < 3600) {
    const min = Math.floor(differentTime / 60);
    return `${min}분 전`;
  } else if (differentTime < 86400) {
    const hours = Math.floor(differentTime / 3600);
    return `${hours}시간 전`;
  } else if (differentTime < 2592000) {
    const hours = Math.floor(differentTime / 86400);
    return `${hours}일 전`;
  } else if (differentTime < 31536000) {
    const hours = Math.floor(differentTime / 2592000);
    return `${hours}달 전`;
  } else {
    const years = Math.floor(differentTime / 31536000);
    return `${years}년 전`;
  }
}
