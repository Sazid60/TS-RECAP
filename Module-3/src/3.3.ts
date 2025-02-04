{
  // amra onek somoy guard diye check kore dekhi ekei bole type guard/narrowing
  // type guard funtion eo use kora jay object eo use kora jay

  // functional programmin e type guard

  // type operator --> type guard
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);
  const result2 = add("saz", "id");
  console.log(result2);

  // in guard --> type guard
  // in guard sob somoy kaj kore object er khetre

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      // er mane hoilo role ta user er moddhe ase ki na
      console.log(`My name is ${user.name} and the role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "normal bhai",
  };

  const adminUser: AdminUser = {
    name: "admin bhai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
