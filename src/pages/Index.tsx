import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Apartment {
  id: number;
  title: string;
  price: string;
  location: string;
  rooms: number;
  area: number;
  image: string;
  link: string;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const apartments: Apartment[] = [
    {
      id: 1,
      title: "Современная квартира в центре",
      price: "45 000 ₽/мес",
      location: "Центральный район",
      rooms: 2,
      area: 65,
      image: "/img/a4cd5716-3be5-49b7-832f-db3183950b72.jpg",
      link: "https://example.com/apartment-1",
    },
    {
      id: 2,
      title: "Уютная студия с панорамными окнами",
      price: "28 000 ₽/мес",
      location: "Деловой центр",
      rooms: 1,
      area: 42,
      image: "/img/7feb7272-d802-460c-876d-124b0fd61a88.jpg",
      link: "https://example.com/apartment-2",
    },
    {
      id: 3,
      title: "Просторная трёхкомнатная",
      price: "65 000 ₽/мес",
      location: "Жилой комплекс",
      rooms: 3,
      area: 95,
      image: "/img/03cf20c4-edc5-4919-9df7-e71e2484f711.jpg",
      link: "https://example.com/apartment-3",
    },
    {
      id: 4,
      title: "Стильная квартира у парка",
      price: "38 000 ₽/мес",
      location: "Парковая зона",
      rooms: 2,
      area: 58,
      image: "/img/a4cd5716-3be5-49b7-832f-db3183950b72.jpg",
      link: "https://example.com/apartment-4",
    },
    {
      id: 5,
      title: "Квартира с видом на город",
      price: "52 000 ₽/мес",
      location: "Высотный комплекс",
      rooms: 2,
      area: 70,
      image: "/img/7feb7272-d802-460c-876d-124b0fd61a88.jpg",
      link: "https://example.com/apartment-5",
    },
    {
      id: 6,
      title: "Компактная однушка",
      price: "25 000 ₽/мес",
      location: "Спальный район",
      rooms: 1,
      area: 35,
      image: "/img/03cf20c4-edc5-4919-9df7-e71e2484f711.jpg",
      link: "https://example.com/apartment-6",
    },
  ];

  const filteredApartments = apartments.filter((apt) => {
    const matchesSearch =
      apt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "1" && apt.rooms === 1) ||
      (selectedFilter === "2" && apt.rooms === 2) ||
      (selectedFilter === "3+" && apt.rooms >= 3);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            Найдите идеальную квартиру для аренды
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Большой выбор квартир в лучших районах города. Быстрый поиск и
            удобные фильтры.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Поиск по названию или району..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedFilter("all")}
            className="text-sm"
          >
            Все квартиры
          </Button>
          <Button
            variant={selectedFilter === "1" ? "default" : "outline"}
            onClick={() => setSelectedFilter("1")}
            className="text-sm"
          >
            1 комната
          </Button>
          <Button
            variant={selectedFilter === "2" ? "default" : "outline"}
            onClick={() => setSelectedFilter("2")}
            className="text-sm"
          >
            2 комнаты
          </Button>
          <Button
            variant={selectedFilter === "3+" ? "default" : "outline"}
            onClick={() => setSelectedFilter("3+")}
            className="text-sm"
          >
            3+ комнат
          </Button>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apartment) => (
            <Card
              key={apartment.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-white text-gray-900 border border-gray-200">
                  {apartment.rooms} комн.
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {apartment.title}
                  </h3>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span className="text-sm">{apartment.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon name="Home" size={16} className="mr-2" />
                  <span className="text-sm">{apartment.area} м²</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-blue-600">
                    {apartment.price}
                  </div>
                  <Button
                    onClick={() => window.open(apartment.link, "_blank")}
                    className="text-sm px-4 py-2"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApartments.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Квартиры не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска или фильтры
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Найдите свой идеальный дом
          </h3>
          <p className="text-gray-600 mb-6">
            Мы поможем вам найти квартиру мечты в лучших районах города
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center text-gray-600">
              <Icon name="Shield" size={20} className="mr-2" />
              <span className="text-sm">Проверенные объекты</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="Clock" size={20} className="mr-2" />
              <span className="text-sm">Быстрый ответ</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="Star" size={20} className="mr-2" />
              <span className="text-sm">Лучшие предложения</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
