import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import CryptJS from 'crypto-js';
import { LabelInputFile, ButtonExportTodos, SelectTheme, Box } from './styled';

import { useGlobalContext } from '../../utils/GlobalContext';
import { auth, db, secretKey } from '../../services/firebase';

export default function AppSettings(): JSX.Element {
  const user = auth.currentUser;
  const { setCurrentTheme } = useGlobalContext();
  const storedTheme = localStorage.getItem('currentTheme') || '{}';
  const usersCollection = collection(db, '/', 'users');
  const usersDoc = doc(usersCollection, user?.uid);
  const [fileName, setFileName] = useState<string>('Select File');

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files ?? [];
    if (files[0].type === 'application/json') {
      const reader = new FileReader();
      setFileName(files[0].name);
      reader.onload = async () => {
        if (typeof reader.result === 'string') {
          await updateDoc(usersDoc, {
            todos: CryptJS.AES.encrypt(reader.result, secretKey).toString()
          });
        }
      };
      reader.readAsText(files[0]);
      toast.success(`File ${files[0].name} imported sucessfuly`);
    } else {
      toast.error(`The file ${files[0].name} it's not a JSON file`);
    }
  };

  const handleExport = async () => {
    const response = await getDoc(usersDoc);
    const data: string = CryptJS.AES.decrypt(
      response.data()?.todos,
      secretKey
    ).toString(CryptJS.enc.Utf8);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `todos[${user?.displayName}].json`;
    link.click();
    toast.success(`File ${link.download} exported sucessfuly`);
  };

  return (
    <>
      <Box>
        <p>Theme</p>
        <SelectTheme
          value={storedTheme}
          onChange={(e) => {
            setCurrentTheme(e.target.value);
            localStorage.setItem('currentTheme', e.target.value);
          }}
        >
          <option value="defaultDark">Dark</option>
          <option value="darker">Darker</option>
          <option value="defaultLight">Light</option>
          <option value="rosePineDarkTheme">Rosé Pine Dark</option>
          <option value="rosePineLightTheme">Rosé Pine Light</option>
        </SelectTheme>
      </Box>
      <Box>
        <form
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <p>Import Todo</p>
          <LabelInputFile htmlFor="json-import">
            <input
              type="file"
              id="json-import"
              accept=".json"
              onChange={(e) => handleImport(e)}
            />
            {fileName}
          </LabelInputFile>
        </form>
      </Box>
      <Box>
        <p>Export Todos</p>
        <ButtonExportTodos type="button" onClick={handleExport}>
          Export
        </ButtonExportTodos>
      </Box>
    </>
  );
}
