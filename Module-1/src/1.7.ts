{
  //  Union Type
  type FrontendDeveloper = "Fakibaz" | "Jr.Dev";
  type BackendDeveloper = "FrontendDeveloper" | "Fullstack Developer";

  type newDeveloper = FrontendDeveloper | BackendDeveloper;

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "B+" | "AB+" | "O+";
  };

  const user: User = {
    name: "sazid",
    email: "sazod@gmail.com",
    gender: "Male",
    bloodGroup: "B+",
  };
}

{
  //   Intersection Type
  type FrontendDeveloper = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skill: ["HTML", "CSS", "JS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  console.log(fullstackDeveloper);
}
