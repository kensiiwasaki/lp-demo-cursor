export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">イベント名</h3>
            <p className="mb-4">
              素晴らしい体験をお届けするイベントです。 ぜひご参加ください。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <p>メール: info@example.com</p>
            <p>電話: 03-1234-5678</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2023 イベント名 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
