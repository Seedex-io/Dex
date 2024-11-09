const themeSearchbar = {
  input: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary.border',
        color: 'primary.contrastText',
      },
    },

    '& .MuiOutlinedInput-input': {
      color: 'primary.contrastText',
    },

    '& .MuiInputBase-root': {
      color: 'transparent',
      backgroundColor: 'transparent',
    },

    '& .MuiInputLabel-root': {
      color: 'primary.contrastText',
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: 'primary.contrastText',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: 'primary.main',
        color: 'primary.contrastText',
      },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
      {
        borderColor: 'primary.main',
        color: 'primary.contrastText',
      },

    '& .MuiSvgIcon-root': {
      color: 'primary.contrastText',
    },
  },
  popper: {
    '& .MuiPaper-root': {
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    },
    '& .MuiAutocomplete-noOptions': {
      color: 'primary.contrastText',
    },
    '& .MuiAutocomplete-loading': {
      color: 'primary.contrastText',
    },
  },
  header: {
    backgroundColor: 'transparent',
  },
  navbar: {
    backgroundColor: 'transparent',
  },
};

export default themeSearchbar;
