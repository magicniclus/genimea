import { useEffect, useState } from "react";
import Flag from "react-world-flags";

const Resultat = () => {
  const userDynamic = [
    {
      firstName: "Carlos",
      lastName: "Garcia",
      age: 30,
      country: "MX",
      score: 85,
    },
    {
      firstName: "Aiko",
      lastName: "Tanaka",
      age: 22,
      country: "JP",
      score: 98,
    },
    {
      firstName: "Fatima",
      lastName: "Benali",
      age: 28,
      country: "MA",
      score: 76,
    },
    {
      firstName: "Liam",
      lastName: "O'Connor",
      age: 32,
      country: "IE",
      score: 104,
    },
    {
      firstName: "Yara",
      lastName: "Silva",
      age: 27,
      country: "BR",
      score: 89,
    },
    {
      firstName: "Chen",
      lastName: "Wang",
      age: 24,
      country: "CN",
      score: 91,
    },
    {
      firstName: "Sophia",
      lastName: "Schmidt",
      age: 29,
      country: "DE",
      score: 108,
    },
    {
      firstName: "Ivan",
      lastName: "Petrov",
      age: 31,
      country: "RU",
      score: 92,
    },
    {
      firstName: "Amara",
      lastName: "Ndiaye",
      age: 26,
      country: "SN",
      score: 95,
    },
    {
      firstName: "Luca",
      lastName: "Rossi",
      age: 23,
      country: "IT",
      score: 87,
    },
    {
      firstName: "Mia",
      lastName: "Novak",
      age: 28,
      country: "HR",
      score: 78,
    },
    {
      firstName: "Hassan",
      lastName: "Ali",
      age: 27,
      country: "EG",
      score: 82,
    },
    {
      firstName: "Anya",
      lastName: "Kumar",
      age: 25,
      country: "IN",
      score: 90,
    },
    {
      firstName: "Olivia",
      lastName: "Martin",
      age: 30,
      country: "CA",
      score: 103,
    },
    {
      firstName: "Lucas",
      lastName: "Mendes",
      age: 24,
      country: "PT",
      score: 88,
    },
    {
      firstName: "Emma",
      lastName: "Dubois",
      age: 29,
      country: "FR",
      score: 109,
    },
    {
      firstName: "Alex",
      lastName: "Brown",
      age: 32,
      country: "AU",
      score: 94,
    },
    {
      firstName: "Nina",
      lastName: "Popova",
      age: 26,
      country: "BG",
      score: 80,
    },
    {
      firstName: "Jorge",
      lastName: "Fernandez",
      age: 31,
      country: "ES",
      score: 105,
    },
    {
      firstName: "Sara",
      lastName: "Ahmed",
      age: 27,
      country: "SA",
      score: 97,
    },
  ];

  const [users, setUsers] = useState([userDynamic[0]]);
  const [index, setIndex] = useState(0);

  function generateRandomNumber(min = 4000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % userDynamic.length;
        setUsers((prevUsers) => {
          const newUser = userDynamic[newIndex];
          const newUsers = [
            newUser,
            ...prevUsers.filter((user) => user.firstName !== newUser.firstName),
          ];
          if (newUsers.length > 6) {
            newUsers.pop();
          }
          return newUsers;
        });
        return newIndex;
      });
    }, generateRandomNumber());

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <style jsx>{`
        .transition {
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .hidden {
          opacity: 0;
          transform: translateY(-20px);
        }
      `}</style>
      <section style={{ zIndex: 200 }}>
        <div className="w-screen bg-slate-100 text-slate-700 fixed top-0 right-0 py-3 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 w-full">
            <div className="flex mx-auto items-center transition">
              <p className="transition">
                <strong>
                  {userDynamic[index].firstName} {userDynamic[index].lastName}
                </strong>{" "}
                from{" "}
              </p>
              <Flag
                code={userDynamic[index].country}
                className="h-5 w-auto rounded-md mx-2 transition"
              />
              <p className="transition">
                has a score of <strong>{userDynamic[index].score}</strong>!
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto rounded-xl flex flex-row items-center justify-start py-6 pt-12 lg:px-8">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="w-full col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {users.map((user, idx) => (
                <div
                  key={user.firstName + idx}
                  className="bg-backgroundBlue/50 text-white rounded-md shadow-lg m-2 p-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="overflow-hidden rounded-md">
                      <Flag
                        code={user.country}
                        alt={user.firstName}
                        className="h-10 w-20 rounded-md"
                      />
                    </div>
                    <h3 className="text-sm font-semibold ml-2">
                      {user.firstName}
                    </h3>
                    <p className="text-sm ml-2"> {user.lastName}</p>
                  </div>
                  IQ = {user.score}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resultat;
