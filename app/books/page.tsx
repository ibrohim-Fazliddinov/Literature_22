import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"

export default function BooksPage() {
  const books = [
    {
      id: 1,
      title: "Война и мир",
      author: "Лев Толстой",
      genre: "Классическая литература",
      year: 1869,
      pages: 1408,
      rating: 4.8,
      price: 890,
      description:
        "Эпический роман о русском обществе в эпоху наполеоновских войн. Произведение, которое изменило представление о литературе и показало всю глубину человеческой души.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-teal-400",
      bgShape: "circle",
      inStock: true,
      bestseller: true,
    },
    {
      id: 2,
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      genre: "Психологический роман",
      year: 1866,
      pages: 671,
      rating: 4.7,
      price: 650,
      description:
        "Психологический роман о моральных дилеммах и искуплении. Глубокое исследование человеческой психики и нравственных границ.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-yellow-400",
      bgShape: "triangle",
      inStock: true,
      bestseller: true,
    },
    {
      id: 3,
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      genre: "Мистический роман",
      year: 1967,
      pages: 480,
      rating: 4.9,
      price: 720,
      description:
        "Мистический роман о добре и зле, любви и предательстве. Произведение, которое стало культовым в русской литературе.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-red-400",
      bgShape: "abstract",
      inStock: false,
      bestseller: true,
    },
    {
      id: 4,
      title: "Анна Каренина",
      author: "Лев Толстой",
      genre: "Классическая литература",
      year: 1877,
      pages: 864,
      rating: 4.5,
      price: 780,
      description:
        "Трагическая история любви и семейных отношений. Роман о страсти, долге и поиске смысла жизни в высшем обществе.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-green-400",
      bgShape: "circle",
      inStock: true,
      bestseller: false,
    },
    {
      id: 5,
      title: "Отцы и дети",
      author: "Иван Тургенев",
      genre: "Социальный роман",
      year: 1862,
      pages: 320,
      rating: 4.4,
      price: 480,
      description:
        "Роман о конфликте поколений и социальных изменениях. История о столкновении старых и новых идей в русском обществе.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-blue-400",
      bgShape: "abstract",
      inStock: true,
      bestseller: false,
    },
    {
      id: 6,
      title: "Евгений Онегин",
      author: "Александр Пушкин",
      genre: "Роман в стихах",
      year: 1833,
      pages: 384,
      rating: 4.6,
      price: 520,
      description: "Роман в стихах о любви, дружбе и русском дворянстве. Энциклопедия русской жизни начала XIX века.",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-purple-400",
      bgShape: "triangle",
      inStock: true,
      bestseller: false,
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
            <a href="/books" className="text-yellow-400">
              Книги
            </a>
            <a href="/authors" className="hover:text-gray-300">
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
          <h1 className="text-2xl font-bold text-center">Каталог избранных произведений</h1>
        </div>
      </section>

      {/* Book Sections */}
      {books.map((book, index) => (
        <section key={book.id} className="relative min-h-screen flex">
          {/* Main Content Area */}
          <div className="flex-1 relative overflow-hidden">
            {/* Large Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-start pl-20">
              <div className={`w-96 h-96 ${getShapeClasses(book.bgShape, book.bgColor)} opacity-90`} />
            </div>

            {/* Book Cover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="shadow-2xl hover:scale-105 transition-all duration-500"
                />
                {book.bestseller && (
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Бестселлер
                  </div>
                )}
                {!book.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                    <span className="text-white font-bold text-lg">Нет в наличии</span>
                  </div>
                )}
              </div>
            </div>

            {/* Book Info Section */}
            <div className="absolute bottom-20 left-20 right-80 z-20">
              <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold">{book.rating}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h2>
                <p className="text-lg text-gray-700 mb-4">
                  {book.author} • {book.year}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-900">{book.price} ₽</div>
                  <div className="text-sm text-gray-500">{book.pages} страниц</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            {/* Genre Tab */}
            <div className="bg-black text-white p-4">
              <div className="writing-mode-vertical text-sm font-bold">{book.genre}</div>
            </div>

            {/* Book Details */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Детали издания</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Год издания:</span>
                  <span className="font-medium">{book.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Страниц:</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Жанр:</span>
                  <span className="font-medium">{book.genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Рейтинг:</span>
                  <span className="font-medium">{book.rating}/5</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex-1 p-6">
              <div className="space-y-4">
                <Button className="w-full" disabled={!book.inStock} size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {book.inStock ? `Купить за ${book.price} ₽` : "Нет в наличии"}
                </Button>

                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <Heart className="w-5 h-5 mr-2" />В избранное
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  Читать отрывок
                </Button>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-center space-x-2">
                {books.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full ${dotIndex === index ? book.bgColor : "bg-gray-300"}`}
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
