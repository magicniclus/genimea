"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  score: number;
};

type ResultatProps = {
  index: number;
  userDynamic: User[];
};

type Language = "FR" | "EN";

const Resultat = ({ index, userDynamic }: ResultatProps) => {
  const [users, setUsers] = useState<User[]>([userDynamic[0]]);
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Par défaut 'FR'

  useEffect(() => {
    const lang = searchParams?.get("lang"); // Ajouter une vérification nulle pour searchParams
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  useEffect(() => {
    const newUser = userDynamic[index];
    setUsers((prevUsers) => {
      const newUsers = [
        newUser,
        ...prevUsers.filter((user) => user?.firstName !== newUser?.firstName),
      ];
      if (newUsers.length > 6) {
        newUsers.pop();
      }
      return newUsers;
    });
  }, [index]);

  const contentFr = () => (
    <div className="flex mx-auto items-center transition flex-col md:flex-row">
      <p className="transition">
        Nouvel utilisateur : {"   "}
        <strong>
          {userDynamic[index]?.firstName} {userDynamic[index]?.lastName}
        </strong>{" "}
        de{" "}
      </p>
      <Flag
        code={userDynamic[index]?.country}
        className="h-5 w-auto rounded-md mx-2 transition"
      />
      <p className="transition">
        a un score de <strong>{userDynamic[index]?.score}</strong>!
      </p>
    </div>
  );

  const contentEn = () => (
    <div className="flex mx-auto items-center transition flex-col md:flex-row">
      <p className="transition">
        New user: {"   "}
        <strong>
          {userDynamic[index]?.firstName} {userDynamic[index]?.lastName}
        </strong>{" "}
        from{" "}
      </p>
      <Flag
        code={userDynamic[index]?.country}
        className="h-5 w-auto rounded-md mx-2 transition"
      />
      <p className="transition">
        has a score of <strong>{userDynamic[index]?.score}</strong>!
      </p>
    </div>
  );

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
        <div className="w-screen bg-slate-100 text-slate-700 fixed top-0 right-0 py-3 z-50 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 w-full">
            {selectedLang === "FR" ? contentFr() : contentEn()}
          </div>
        </div>
        <div className="max-w-6xl mx-auto rounded-xl flex flex-col items-center justify-start py-6 pt-12 lg:px-8">
          <h2 className="text-3xl text-slate-700 font-bold mt-3 mx-auto mb-7">
            {selectedLang === "FR" ? "Derniers résultats" : "Latest results"}
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="w-full col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {users.map((user, idx) => (
                <div
                  key={user?.firstName + idx}
                  className="bg-backgroundBlue/50 text-white rounded-md shadow-lg m-2 p-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="overflow-hidden rounded-md">
                      <Flag
                        code={user?.country}
                        alt={user?.firstName}
                        className="h-10 w-20 rounded-md"
                      />
                    </div>
                    <h3 className="text-sm font-semibold ml-2">
                      {user?.firstName}
                    </h3>
                    <p className="text-sm ml-2"> {user?.lastName}</p>
                  </div>
                  {selectedLang === "FR" ? "QI = " : "IQ = "}
                  {user?.score}
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
