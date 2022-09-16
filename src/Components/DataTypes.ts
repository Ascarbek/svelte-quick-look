export interface FieldMap {
  [keys: string]: {
    title: string;
    type: 'string' | 'number' | 'date' | 'boolean';
    editType: 'input' | 'area' | 'range' | 'checkbox' | 'radio' | 'date' | 'datetime';
    radioValues?: string[];
  };
}
