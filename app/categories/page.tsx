import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, TrendingUp } from "lucide-react"

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Классическая литература",
      description:
        "Великие произведения русской и мировой классики, которые определили развитие литературы и культуры. Романы, повести и рассказы, ставшие достоянием человечества.",
      booksCount: 156,
      authorsCount: 45,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-teal-400",
      bgShape: "circle",
      popularBooks: ["Война и мир", "Анна Каренина", "Преступление и наказание"],
      trending: true,
      category: "Классика",
    },
    {
      id: 2,
      name: "Поэзия",
      description:
        "Стихотворения и поэмы великих поэтов, воспевающие красоту русского языка. От лирики до эпических произведений, от романтизма до современности.",
      booksCount: 89,
      authorsCount: 32,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-yellow-400",
      bgShape: "triangle",
      popularBooks: ["Евгений Онегин", "Демон", "Медный всадник"],
      trending: false,
      category: "Поэзия",
    },
    {
      id: 3,
      name: "Драматургия",
      description:
        "Пьесы и драматические произведения, созданные для театральной сцены. Комедии, драмы и трагедии, которые до сих пор ставятся в театрах мира.",
      booksCount: 67,
      authorsCount: 28,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-red-400",
      bgShape: "abstract",
      popularBooks: ["Вишнёвый сад", "Ревизор", "Гроза"],
      trending: true,
      category: "Театр",
    },
    {
      id: 4,
      name: "Современная проза",
      description:
        "Произведения современных авторов, отражающие реалии нашего времени. Новые голоса в литературе, актуальные темы и современный взгляд на мир.",
      booksCount: 234,
      authorsCount: 78,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-green-400",
      bgShape: "circle",
      popularBooks: ["Зулейха открывает глаза", "Лавр", "Авиатор"],
      trending: true,
      category: "Современность",
    },
    {
      id: 5,
      name: "Мистическая проза",
      description:
        "Произведения с элементами фантастики, мистики и магического реализма. Книги, которые расширяют границы реальности и заставляют задуматься о непознанном.",
      booksCount: 145,
      authorsCount: 52,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-blue-400",
      bgShape: "abstract",
      popularBooks: ["Мастер и Маргарита", "Пикник на обочине", "Трудно быть богом"],
      trending: false,
      category: "Мистика",
    },
    {
      id: 6,
      name: "Философская литература",
      description:
        "Произведения с глубоким философским содержанием, поднимающие вечные вопросы бытия. Книги, которые заставляют размышлять о смысле жизни и месте человека в мире.",
      booksCount: 78,
      authorsCount: 29,
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-purple-400",
      bgShape: "triangle",
      popularBooks: ["Братья Карамазовы", "Доктор Живаго", "Мы"],
      trending: false,
      category: "Философия",
    },
  ]

  const getShapeClasses = (shape: string, bgColor: string) => {
    switch (shape) {
      case "circle":
        return `${bgColor} rounded-full`
      case "triangle":
        return `${bgColor} transform rotate-45`
      case "abstract":
        return `${bgColor} transform -skew-x-12`
      default:
        return `${bgColor} rounded-full`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">22-Notes&Library</div>
          <nav className="flex space-x-6 text-sm">
            <a href="/" className="hover:text-gray-300">
              Главная
            </a>
            <a href="/books" className="hover:text-gray-300">
              Книги
            </a>
            <a href="/authors" className="hover:text-gray-300">
              Авторы
            </a>
            <a href="/categories" className="text-yellow-400">
              Категории
            </a>
          </nav>
        </div>
      </header>

      {/* Title Banner */}
      <section className="bg-black text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">Литературные направления и жанры</h1>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <section key={category.id} className="relative min-h-screen flex">
          {/* Main Content Area */}
          <div className="flex-1 relative overflow-hidden">
            {/* Large Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-start pl-20">
              <div className={`w-96 h-96 ${getShapeClasses(category.bgShape, category.bgColor)} opacity-90`} />
            </div>

            {/* Category Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={300}
                  height={400}
                  className="shadow-2xl hover:scale-105 transition-all duration-500 rounded-lg"
                />
                {category.trending && (
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Популярно
                  </div>
                )}
              </div>
            </div>

            {/* Category Info Section */}
            <div className="absolute bottom-20 left-20 right-80 z-20">
              <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{category.booksCount}</div>
                    <div className="text-sm text-gray-600">Книг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{category.authorsCount}</div>
                    <div className="text-sm text-gray-600">Авторов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            {/* Category Tab */}
            <div className="bg-black text-white p-4">
              <div className="writing-mode-vertical text-sm font-bold">{category.category}</div>
            </div>

            {/* Category Stats */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Статистика</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="text-gray-600">Книг</span>
                  </div>
                  <span className="font-bold text-gray-900">{category.booksCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-gray-600">Авторов</span>
                  </div>
                  <span className="font-bold text-gray-900">{category.authorsCount}</span>
                </div>
              </div>
            </div>

            {/* Popular Books */}
            <div className="flex-1 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Популярные произведения</h3>
              <div className="space-y-3">
                {category.popularBooks.map((book, bookIndex) => (
                  <Card key={bookIndex} className="p-3 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-10 bg-gray-200 rounded flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{book}</h4>
                        <p className="text-xs text-gray-500">Рекомендуемое</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full mt-4">Все книги категории</Button>
            </div>

            {/* Navigation Dots */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-center space-x-2">
                {categories.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full ${dotIndex === index ? category.bgColor : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 22-Notes&Library. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
