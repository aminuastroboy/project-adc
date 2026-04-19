export default function manifest() {
  return {
    name: 'MT-Sub',
    short_name: 'MT-Sub',
    description: 'Buy data and airtime quickly with MT-Sub.',
    start_url: '/app',
    display: 'standalone',
    background_color: '#f6f8fc',
    theme_color: '#0b63f6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
