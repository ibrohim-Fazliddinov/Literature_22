import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, Award } from "lucide-react"

export default function AuthorsPage() {
  const authors = [
    {
      id: 1,
      name: "Лев Николаевич Толстой",
      birthYear: 1828,
      deathYear: 1910,
      nationality: "Русский",
      genre: "Реализм",
      booksCount: 12,
      awards: "Номинант Нобелевской премии",
      biography:
        "Один из наиболее известных русских писателей и мыслителей, один из величайших писателей-романистов мира. Участник обороны Севастополя. Просветитель, публицист, религиозный мыслитель, чьё авторитетное мнение послужило причиной возникновения нового религиозно-нравственного течения — толстовства.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-teal-400",
      bgShape: "circle",
      famousWorks: ["Война и мир", "Анна Каренина", "Воскресение"],
      quote: "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.",
      category: "Классическая литература",
    },
    {
      id: 2,
      name: "Фёдор Михайлович Достоевский",
      birthYear: 1821,
      deathYear: 1881,
      nationality: "Русский",
      genre: "Психологический реализм",
      booksCount: 15,
      awards: "Пушкинская премия",
      biography:
        "Великий русский писатель, мыслитель, философ и публицист. Член-корреспондент Петербургской АН. Классик мировой литературы, один из самых читаемых писателей в мире. Творчество писателя оказало воздействие на мировую литературу.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-yellow-400",
      bgShape: "triangle",
      famousWorks: ["Преступление и наказание", "Братья Карамазовы", "Идиот"],
      quote: "Красота спасёт мир.",
      category: "Классическая литература",
    },
    {
      id: 3,
      name: "Александр Сергеевич Пушкин",
      birthYear: 1799,
      deathYear: 1837,
      nationality: "Русский",
      genre: "Романтизм, Реализм",
      booksCount: 20,
      awards: "Основатель современного русского языка",
      biography:
        "Великий русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, критик и теоретик литературы, историк, публицист, один из самых авторитетных литературных деятелей первой трети XIX века.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-red-400",
      bgShape: "abstract",
      famousWorks: ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
      quote: "Чтение — вот лучшее учение. Следовать за мыслями великого человека — есть наука самая занимательная.",
      category: "Поэзия и проза",
    },
    {
      id: 4,
      name: "Антон Павлович Чехов",
      birthYear: 1860,
      deathYear: 1904,
      nationality: "Русский",
      genre: "Реализм",
      booksCount: 18,
      awards: "Почётный академик",
      biography:
        "Русский писатель, прозаик, драматург, классик мировой литературы. По профессии врач. Почётный академик Императорской Академии наук по разряду изящной словесности. Один из самых известных драматургов мира.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-green-400",
      bgShape: "circle",
      famousWorks: ["Вишнёвый сад", "Три сестры", "Чайка"],
      quote: "В человеке должно быть всё прекрасно: и лицо, и одежда, и душа, и мысли.",
      category: "Драматургия",
    },
    {
      id: 5,
      name: "Иван Сергеевич Тургенев",
      birthYear: 1818,
      deathYear: 1883,
      nationality: "Русский",
      genre: "Реализм",
      booksCount: 14,
      awards: "Почётный доктор Оксфорда",
      biography:
        "Русский писатель-реалист, поэт, публицист, драматург, переводчик. Один из классиков русской литературы, внёсших наиболее значительный вклад в её развитие во второй половине XIX века. Член-корреспондент императорской Академии наук.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-blue-400",
      bgShape: "abstract",
      famousWorks: ["Отцы и дети", "Дворянское гнездо", "Записки охотника"],
      quote: "Природа не храм, а мастерская, и человек в ней работник.",
      category: "Классическая литература",
    },
    {
      id: 6,
      name: "Михаил Афанасьевич Булгаков",
      birthYear: 1891,
      deathYear: 1940,
      nationality: "Русский",
      genre: "Сатира, Фантастика",
      booksCount: 8,
      awards: "Посмертное признание",
      biography:
        "Русский писатель, драматург, театральный режиссёр и актёр. Автор романов, повестей, рассказов, пьес, либретто, фельетонов и переводов. Наиболее известные произведения: романы «Белая гвардия», «Мастер и Маргарита», пьесы «Дни Турбиных», «Бег», повести «Роковые яйца», «Собачье сердце».",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-purple-400",
      bgShape: "triangle",
      famousWorks: ["Мастер и Маргарита", "Собачье сердце", "Белая гвардия"],
      quote: "Рукописи не горят.",
      category: "Мистическая проза",
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
            <a href="/authors" className="text-yellow-400">
              Авторы
            </a>
            <a href="/categories" className="hover:text-gray-300">
              Категории
            </a>
          </nav>
        </div>
      </header>

      {/* Title Banner */}
      <section className="bg-black text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">Великие мастера слова</h1>
        </div>
      </section>

      {/* Author Sections */}
      {authors.map((author, index) => (
        <section key={author.id} className="relative min-h-screen flex">
          {/* Main Content Area */}
          <div className="flex-1 relative overflow-hidden">
            {/* Large Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-start pl-20">
              <div className={`w-96 h-96 ${getShapeClasses(author.bgShape, author.bgColor)} opacity-90`} />
            </div>

            {/* Author Portrait */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10">
                <Image
                  src={author.image || "/placeholder.svg"}
                  alt={author.name}
                  width={300}
                  height={400}
                  className="grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl rounded-lg"
                />
              </div>
            </div>

            {/* Quote and Bio Section */}
            <div className="absolute bottom-20 left-20 right-80 z-20">
              <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-gray-300 font-serif leading-none">"</div>
                <blockquote className="text-lg text-gray-800 italic mb-4 leading-relaxed">{author.quote}</blockquote>
                <div className="text-6xl text-gray-300 font-serif leading-none text-right">"</div>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">{author.biography}</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            {/* Category Tab */}
            <div className="bg-black text-white p-4">
              <div className="writing-mode-vertical text-sm font-bold">{author.category}</div>
            </div>

            {/* Author Name */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h2>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                {author.birthYear} - {author.deathYear}
              </div>
            </div>

            {/* Author Stats */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Информация</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-600">Произведений:</span>
                  <span className="ml-auto font-medium">{author.booksCount}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-600">Награды:</span>
                </div>
                <p className="text-xs text-gray-500 ml-6">{author.awards}</p>
              </div>
            </div>

            {/* Famous Works */}
            <div className="flex-1 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Известные произведения</h3>
              <div className="space-y-3">
                {author.famousWorks.map((work, workIndex) => (
                  <Card key={workIndex} className="p-3 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-10 bg-gray-200 rounded flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{work}</h4>
                        <p className="text-xs text-gray-500">Классическое издание</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full mt-4">Все произведения автора</Button>
            </div>

            {/* Navigation Dots */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-center space-x-2">
                {authors.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full ${dotIndex === index ? author.bgColor : "bg-gray-300"}`}
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
