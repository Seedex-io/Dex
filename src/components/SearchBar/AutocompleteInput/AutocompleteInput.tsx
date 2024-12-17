import { useEffect, useState } from 'react';
import { Modal, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Search } from '@mui/icons-material';
import './styles.css';
import Option from './Option';
import Input from './Input';
import themeSearchbar from '../theme';

interface AutocompleteInputProps {
  isOpen: boolean;
}

export default function AutocompleteInput({ isOpen }: AutocompleteInputProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const loading = autocompleteOpen;

  useEffect(() => {
    if (!autocompleteOpen) {
      setOptions([]);
    }
  }, [autocompleteOpen]);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setModalOpen(false);
    setAutocompleteOpen(false);
  };

  return (
    <div>
      {/* Conditionally render based on isOpen */}
      {isOpen ? (
        // Full input field when navbar is open
        <div>
          <Input
            params={{}}
            loading={loading}
            setOptions={setOptions}
            placeholder="Search by name, symbol, or address"
          />
        </div>
      ) : (
        // Search icon only when navbar is closed
        <div onClick={handleModalOpen} className="flex items-center justify-center cursor-pointer">
          <div className='p-[8px] w-full bg-[#3f1040] rounded-md'>
            <Search className='w-8 h-8 text-white'/>
          </div>
        </div>
      )}

      {/* Modal for expanded input */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="token-search-modal"
        aria-describedby="modal-for-token-search"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translate(-50%, -5%)',
            width: '50rem',
            maxWidth: '92vw',
            minHeight: 100,
            bgcolor: '#220b26',
            boxShadow: 24,
            p: 0,
          }}
        >
          <Autocomplete
            id="search_token_modal"
            className="bg-[#2b152e] rounded-none"
            classes={{
              paper: '!border-none !bg-[#3f1040] flex flex-col px-2.5 pb-2 md:px-4 md:pb-3',
              root: 'search_token_root',
            }}
            sx={themeSearchbar.input}
            open={autocompleteOpen}
            onOpen={() => setAutocompleteOpen(true)}
            onClose={() => setAutocompleteOpen(false)}
            renderOption={(_, option) => <Option option={option} />}
            getOptionLabel={(option: any) => option.name}
            options={options}
            filterOptions={(options) => options}
            loading={loading}
            renderInput={(params) => (
              <Input params={params} loading={loading} setOptions={setOptions} />
            )}
          />
        </Box>
      </Modal>
    </div>
  );
}
