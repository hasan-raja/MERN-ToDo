module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'Vectorlanding': "url('./img/Vectorlanding.svg')",
        //'footer-texture': "url('/img/footer-texture.png')",
       },
      colors:{
        primary:"#282C40",
        secondary:"#5D6DE3",
        fback:"#E5EDEC",
        fred:"#FD5E53",
        fwhite:"#FFFFFF",
        fblack:"#000000"
      }
    },
    colors: {
      
      // Configure your color palette here
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
