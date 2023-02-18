import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  FormContainerFile,
  SelectThemeContainer,
  LabelInputFile,
  Title,
  SpanContainerExportTodos,
  ButtonExportTodos,
} from './styled';

import { useGlobalContext } from '../../utils/GlobalContext';

export default function Settings() {
  const [fileName, setFileName] = useState<string>('Select File');
  const [jsonData, setJsonData] = useState(null);
  const { setCurrentTheme } = useGlobalContext();
  const storedTheme = localStorage.getItem('currentTheme') || '{}';

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files ?? [];
    if (files[0].type === 'application/json') {
      const reader = new FileReader();
      setFileName(files[0].name);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setJsonData(JSON.parse(reader.result));
        }
      };
      reader.readAsText(files[0]);
      toast.success(`File ${files[0].name} imported sucessfuly`);
    } else {
      toast.error(`The file ${files[0].name} it's not a JSON file`);
    }
  };

  const handleExport = () => {
    const data = localStorage.getItem('todosLocal');
    if (typeof data === 'string') {
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'todos.json';
      link.click();
      toast.success(`File ${link.download} exported sucessfuly`);
    }
  };

  useEffect(() => {
    if (jsonData !== null) {
      localStorage.setItem('todosLocal', JSON.stringify(jsonData));
    }
  }, [jsonData]);

  return (
    <Container>
      <Title>Settings</Title>
      <SelectThemeContainer>
        <span>Theme:</span>
        <select
          id="theme"
          value={storedTheme}
          onChange={(e) => {
            setCurrentTheme(e.target.value);
            localStorage.setItem('currentTheme', e.target.value);
          }}
        >
          <option value="defaultDark">Dark</option>
          <option value="defaultLight">Light</option>
          <option value="rosePineDarkTheme">Rosé Pine Dark</option>
          <option value="rosePineLightTheme">Rosé Pine Light</option>
        </select>
      </SelectThemeContainer>

      <FormContainerFile>
        <span>Import Todo:</span>
        <LabelInputFile htmlFor="json-import">
          <input
            type="file"
            id="json-import"
            accept=".json"
            onChange={(e) => handleImport(e)}
          />
          {fileName}
        </LabelInputFile>
      </FormContainerFile>

      <SpanContainerExportTodos>
        <span>Export Todos: </span>
        <ButtonExportTodos type="button" onClick={handleExport}>
          Export
        </ButtonExportTodos>
      </SpanContainerExportTodos>
    </Container>
  );
}
