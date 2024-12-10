import './globals.css';

export const metadata = {
  title: 'Database Management App',
  description: 'Manage databases with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
