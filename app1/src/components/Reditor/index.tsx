import React, {
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import toolbars from './toolbars';

export interface ReditorRef {
  insertHtml: (value: string) => void;
  setContent: (value: string, catchRemoteImageEnable?: boolean) => void;
}

export interface IProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

type MediaType = 'image' | 'audio' | 'video';

let editorInstance: any = null;

const Reditor: React.RefForwardingComponent<ReditorRef, IProps> = (
  { defaultValue = '', onChange = () => {} },
  ref,
) => {

  const insertHtml = useCallback(
    (value: string) => {
      editorInstance.ready(() => {
        editorInstance.focus();
        editorInstance.execCommand('inserthtml', value, true);
      });
    },
    [editorInstance],
  );

  const setContent = useCallback(
    (value: string, catchRemoteImageEnable: boolean = false) => {
      editorInstance.ready(() => {
        editorInstance.setContent(value);
        if (catchRemoteImageEnable) {
          editorInstance.fireEvent('catchRemoteImage');
        }
      });
    },
    [editorInstance],
  );

  useImperativeHandle(ref, () => ({
    insertHtml,
    setContent,
  }));



  useEffect(() => {
    editorInstance = window.UE.getEditor('editor', {
      toolbars: [[...toolbars]],
      enableAutoSave: false,
      autoFloatEnabled: false,
      initialFrameHeight: 450,
      initialFrameWidth: '100%',
      elementPathEnabled: false,
      wordCount: true,
      catchRemoteImageEnable: true,
      zIndex: 900,
      maximumWords: 20000,
    });
    editorInstance.ready(() => {
      console.log(window.UE);
      editorInstance.addListener('contentChange', () => {
        onChange(editorInstance.getContent(() => true));
      });
    });
  });

  return (
    <script id="editor" type="text/plain" />
  );
};

export default forwardRef(Reditor);
