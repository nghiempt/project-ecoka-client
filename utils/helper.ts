// convert string to money
export const convertStringToMoney = (money: string) => {
  return money.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// increase 10% money
export const increaseMoney = (money: any) => {
  return money + money * 0.1;
};

// limit string
export const limitString = (str: string, limit: any) => {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
};
