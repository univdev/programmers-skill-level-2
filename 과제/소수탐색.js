function solution(n, k) {
  const num = n.toString(k);
  let nums = [];
  return num.split('0').filter((n) => {
      return isPrime(n * 1);
  }).length;
}

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i += 1) {
      if (num % i === 0) return false;
  }
  return true;
};