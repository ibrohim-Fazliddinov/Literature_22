import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function LiteraryShowcase() {
  const authors = [
    {
      id: 1,
      name: "Александр Пушкин",
      quote: "Чтение — вот лучшее учение. Следовать за мыслями великого человека — есть наука самая занимательная.",
      description:
        "Великий русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, критик и теоретик литературы, историк, публицист, один из самых авторитетных литературных деятелей первой трети XIX века.",
      bgColor: "bg-teal-400",
      bgShape: "circle",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Евгений Онегин", image: "/placeholder.svg?height=160&width=120" },
        { title: "Капитанская дочка", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 2,
      name: "Лев Толстой",
      quote: "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.",
      description:
        "Один из наиболее известных русских писателей и мыслителей, один из величайших писателей-романистов мира. Участник обороны Севастополя. Просветитель, публицист, религиозный мыслитель.",
      bgColor: "bg-yellow-400",
      bgShape: "triangle",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Война и мир", image: "/placeholder.svg?height=160&width=120" },
        { title: "Анна Каренина", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 3,
      name: "Фёдор Достоевский",
      quote: "Красота спасёт мир.",
      description:
        "Великий русский писатель, мыслитель, философ и публицист. Член-корреспондент Петербургской АН. Классик мировой литературы, один из самых читаемых писателей в мире.",
      bgColor: "bg-red-400",
      bgShape: "abstract",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Преступление и наказание", image: "/placeholder.svg?height=160&width=120" },
        { title: "Братья Карамазовы", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 4,
      name: "Антон Чехов",
      quote: "В человеке должно быть всё прекрасно: и лицо, и одежда, и душа, и мысли.",
      description:
        "Русский писатель, прозаик, драматург, классик мировой литературы. По профессии врач. Почётный академик Императорской Академии наук по разряду изящной словесности.",
      bgColor: "bg-green-400",
      bgShape: "circle",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Вишнёвый сад", image: "/placeholder.svg?height=160&width=120" },
        { title: "Три сестры", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 5,
      name: "Иван Тургенев",
      quote: "Природа не храм, а мастерская, и человек в ней работник.",
      description:
        "Русский писатель-реалист, поэт, публицист, драматург, переводчик. Один из классиков русской литературы, внёсших наиболее значительный вклад в её развитие во второй половине XIX века.",
      bgColor: "bg-blue-400",
      bgShape: "abstract",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Отцы и дети", image: "/placeholder.svg?height=160&width=120" },
        { title: "Дворянское гнездо", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 6,
      name: "Николай Гоголь",
      quote:
        "Забирайте же с собою в путь, выходя из мягких юношеских лет в суровое ожесточающее мужество, забирайте с собою все человеческие движения, не оставляйте их на дороге, не подымете потом!",
      description:
        "Русский прозаик, драматург, поэт, критик, публицист, признанный одним из классиков русской литературы. Происходил из старинного дворянского рода Гоголь-Яновских.",
      bgColor: "bg-yellow-400",
      bgShape: "circle",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Мёртвые души", image: "/placeholder.svg?height=160&width=120" },
        { title: "Ревизор", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 7,
      name: "Михаил Лермонтов",
      quote: "Печально я гляжу на наше поколенье! Его грядущее — иль пусто, иль темно.",
      description:
        "Русский поэт, прозаик, драматург, художник. Творчество Лермонтова, в котором сочетаются гражданские, философские и личные мотивы, отвечавшие насущным потребностям духовной жизни русского общества, ознаменовало собой новый расцвет русской литературы.",
      bgColor: "bg-purple-400",
      bgShape: "triangle",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Герой нашего времени", image: "/placeholder.svg?height=160&width=120" },
        { title: "Демон", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
    },
    {
      id: 8,
      name: "Иван Бунин",
      quote: "Человек не может жить без родины, как не может жить без сердца.",
      description:
        "Русский писатель, поэт, почётный академик Петербургской АН, первый русский лауреат Нобелевской премии по литературе. Будучи представителем обедневшего дворянского рода, Бунин в своём творчестве часто обращался к вопросам любви, смерти, памяти.",
      bgColor: "bg-pink-400",
      bgShape: "abstract",
      image: "/placeholder.svg?height=400&width=300",
      books: [
        { title: "Тёмные аллеи", image: "/placeholder.svg?height=160&width=120" },
        { title: "Жизнь Арсеньева", image: "/placeholder.svg?height=160&width=120" },
      ],
      category: "Классическая литература",
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
            <a href="#" className="hover:text-gray-300">
              Главная
            </a>
            <a href="#" className="hover:text-gray-300">
              Книги
            </a>
            <a href="#" className="hover:text-gray-300">
              Авторы
            </a>
            <a href="#" className="hover:text-gray-300">
              Категории
            </a>
          </nav>
        </div>
      </header>

      {/* Title Banner */}
      <section className="bg-black text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">Великие писатели и их произведения</h1>
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
                  className="grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                />
              </div>
            </div>

            {/* Quote Section */}
            <div className="absolute bottom-20 left-20 right-80 z-20">
              <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-gray-300 font-serif leading-none">"</div>
                <blockquote className="text-lg text-gray-800 italic mb-4 leading-relaxed">{author.quote}</blockquote>
                <div className="text-6xl text-gray-300 font-serif leading-none text-right">"</div>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">{author.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900">{author.name}</h2>
            </div>

            {/* Books Section */}
            <div className="flex-1 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Избранные произведения</h3>
              <div className="space-y-4">
                {author.books.map((book, bookIndex) => (
                  <Card key={bookIndex} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={60}
                        height={80}
                        className="rounded shadow"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{book.title}</h4>
                        <p className="text-sm text-gray-600">Классическое издание</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
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
