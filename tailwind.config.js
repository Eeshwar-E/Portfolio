export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0c10',
        bg2: '#13141a',
        bg3: '#1c1e26',
        border: '#232530',
        border2: '#2e3040',
        text: '#eeeef0',
        text2: '#8a8ba0',
        text3: '#50526a',
        accent: '#c8f557',
        accent2: '#a3d93a'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
        display: ['Geist', 'Inter', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
}
