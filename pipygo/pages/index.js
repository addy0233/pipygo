import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 py-10">
      <Head>
        <title>PipyGo — Your Goal. Your Plan.</title>
      </Head>

      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">🎯 Your Goal. Your Plan.</h1>

        <form className="bg-gray-100 p-6 rounded-2xl shadow-xl space-y-4">
          <label className="block">
            <span className="text-lg font-semibold">Что ты хочешь достичь?</span>
            <input
              type="text"
              placeholder="Например: добить 5000 ммр в Dota 2"
              className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block">
            <span className="text-lg font-semibold">Срок выполнения:</span>
            <select className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>1 день</option>
              <option>1 неделя</option>
              <option>1 месяц</option>
              <option>1 год</option>
            </select>
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold text-lg"
          >
            🔥 Сгенерировать план
          </button>
        </form>
      </div>
    </div>
  );
}
