import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gradient-to-br from-white via-slate-100 to-white dark:from-secondary-dark-bg dark:to-slate-800 rounded-3xl shadow-xl transition-all duration-300 ease-in-out">
    <div className="mb-5">
      <Header category="App" title="Rich Text Editor" />
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Use this editor to format text with images, links, and more.
      </p>
    </div>
    <div className="bg-white dark:bg-[#2d2d2d] rounded-xl shadow-lg p-4 transition-colors duration-300">
      <RichTextEditorComponent
        height={400}
        placeholder="Start typing your content here..."
        toolbarSettings={{
          items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough',
            '|', 'Formats', 'FontName', 'FontSize',
            '|', 'Alignments', 'OrderedList', 'UnorderedList',
            '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Undo', 'Redo'
          ]
        }}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  </div>
);

export default Editor;
