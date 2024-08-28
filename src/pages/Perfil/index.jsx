import React from "react";
import Sidebar from "../../components/Sidebar";
import { Card } from "@mui/material";


const chars = [
  {
    name: 'Drakonis Zunky',
    role: 'Mago',
    mesa: 'The Witcher',
    imageUrl:
    'https://img.freepik.com/fotos-gratis/retrato-de-um-personagem-magico-de-fantasia_23-2151450982.jpg?t=st=1724860822~exp=1724864422~hmac=d476be8c06f7e0d655b59f888140984f0b9721d69a93a30991f69ee90cc18fa9&w=740',
  },
  {
    name: 'Dante Baldeck',
    role: 'Clérigo',
    mesa: 'The Witcher',
    imageUrl:
    'https://img.freepik.com/fotos-gratis/retrato-de-um-guerreiro-da-grecia-antiga_23-2151026647.jpg?t=st=1724861027~exp=1724864627~hmac=83b113360f8d332659dc2dccbb836d93857e7e73ff3827ed5cd367ecc54f6d71&w=1060',
  },
  {
    name: 'Londelis Maos-Leves',
    role: 'Ladino',
    mesa: 'New Order to Barovia',
    imageUrl:
      'https://img.freepik.com/fotos-gratis/retrato-de-uma-viking-escandinava_23-2151707138.jpg?t=st=1724860911~exp=1724864511~hmac=35b8fc9cccb79bb4c7d2ef5c64eb7ae460b1fcffaa43b6dbbc4c4a6755598a6a&w=740',
  },
  
]

const Perfil = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className=" items-center justify-center min-h-screen w-full bg-indigo-900 p-6">
        <div className="bg-gray-950 shadow-xl rounded-xl p-6 w-full">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 outline outline-offset-2 outline-indigo-600 rounded-full shadow-lg mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h2 className="text-xl font-semibold text-indigo-600">John Doe</h2>
            <p className="text-white mb-4">john.doe@example.com</p>
            <p className="text-center text-white">
              Full Stack Developer with a passion for creating modern web
              applications. Experienced in React, Node.js, and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Container personagens */}
        <div className="w-full bg-gray-950 mt-4 py-24 sm:py-32 rounded-xl">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Meus Personagens</h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {chars.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 object-cover rounded-full outline outline-offset-2 outline-indigo-600 " />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <p className="text-sm font-semibold leading-6 text-indigo-400">{person.mesa}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
