import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ms } from 'react-native-size-matters';

import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
// Local FIle
import FileViewer from 'react-native-file-viewer';
// Global File
import * as OpenGlobalFile from 'react-native-openanything';

import Color from '../../../../config/utils/color';

const PDFViewer = () => {
  const [type, setType] = useState('Internal');
  const [file, setFile] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // External Files
  const [filesIndex, setFilesIndex] = useState(0);

  const Files = [
    {
      title: 'Dummy PDF',
      docs: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    },
    {
      title: 'Yukon',
      docs: 'https://www.orimi.com/pdf-test.pdf',
    },
    {
      title: 'Graph Maps',
      docs: 'https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-download-10-mb.pdf',
    },
    {
      title: 'ETS',
      docs: 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf',
    },
  ];

  // Internal Files
  const openStorage = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFile(response[0]);
    } catch (err) {
      setFile(currState => currState);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF Viewer</Text>
      <View style={styles.typeControl}>
        <TouchableOpacity
          onPress={() => setType('Internal')}
          style={styles.internalButton}>
          <Text style={styles.buttonText}>Internal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('External')}
          style={styles.externalButton}>
          <Text style={styles.buttonText}>External</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHelper}>You're viewing {type} PDF</Text>
      <View style={styles.contentContainer}>
        {type === 'Internal' ? (
          file ? (
            <View style={styles.documentView}>
              <TouchableOpacity
                style={styles.fullButton}
                onPress={() => openStorage()}>
                <Text style={styles.fullButtonText}>Choose another PDF</Text>
              </TouchableOpacity>
              <Pdf
                source={{ uri: file.uri }}
                style={styles.document}
                page={page}
                onLoadComplete={numberOfPages => {
                  setTotalPage(numberOfPages);
                }}
              />
              <Text style={styles.documentCount}>{file.name}</Text>
              <Text style={styles.documentCount}>
                Pages {page} of {totalPage}
              </Text>
              <TouchableOpacity style={styles.fullButton}>
                <Text
                  style={styles.fullButtonText}
                  onPress={async () => {
                    await FileViewer.open(file.uri);
                  }}>
                  Full Screen
                </Text>
              </TouchableOpacity>
              <View style={styles.pageControl}>
                <TouchableOpacity
                  style={styles.pageButton}
                  onPress={() => {
                    if (page > 1) {
                      setPage(currState => currState - 1);
                    }
                  }}>
                  <Text style={styles.pageButtonText}>Prev Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pageButton}>
                  <Text
                    style={styles.pageButtonText}
                    onPress={() => {
                      if (page !== totalPage) {
                        setPage(currState => currState + 1);
                      }
                    }}>
                    Next Page
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => openStorage()}>
                <Text style={styles.pickButtonText}>Pick a PDF File</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={styles.documentContainer}>
            <View style={styles.documentView}>
              <Pdf
                source={{ uri: Files[filesIndex].docs }}
                style={styles.document}
                page={page}
                onLoadComplete={numberOfPages => {
                  setTotalPage(numberOfPages);
                }}
              />
            </View>
            <Text style={styles.documentCount}>{Files[filesIndex].title}</Text>
            <Text style={styles.documentCount}>
              Pages {page} of {totalPage}
            </Text>
            <Text style={styles.documentCount}>
              ({filesIndex + 1}/{Files.length})
            </Text>
            <TouchableOpacity
              style={styles.fullButton}
              onPress={() => {
                // await FileViewer.open(Files[filesIndex].docs);
                OpenGlobalFile.Open(Files[filesIndex].docs);
              }}>
              <Text style={styles.fullButtonText}>Full Screen</Text>
            </TouchableOpacity>
            <View style={styles.pageControl}>
              <TouchableOpacity
                style={styles.pageButton}
                onPress={() => {
                  if (page > 1) {
                    setPage(currState => currState - 1);
                  }
                }}>
                <Text style={styles.pageButtonText}>Prev Page</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pageButton}>
                <Text
                  style={styles.pageButtonText}
                  onPress={() => {
                    if (page !== totalPage) {
                      setPage(currState => currState + 1);
                    }
                  }}>
                  Next Page
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonControl}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => {
                  if (filesIndex > 0) {
                    setFilesIndex(currState => currState - 1);
                  }
                  setPage(1);
                }}>
                <Text style={styles.pickButtonText}>Prev Docs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickButton}>
                <Text
                  style={styles.pickButtonText}
                  onPress={() => {
                    if (filesIndex < Files.length - 1) {
                      setFilesIndex(currState => currState + 1);
                    }
                    setPage(1);
                  }}>
                  Next Docs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PDFViewer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(20),
    marginTop: ms(20),
    marginBottom: ms(100),
    marginHorizontal: ms(20),
    elevation: ms(6),
  },
  title: {
    color: Color.MAIN_COLOR,
    textAlign: 'left',
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  typeControl: {
    flexDirection: 'row',
    marginVertical: ms(12),
  },
  internalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    marginRight: ms(10),
    borderRadius: ms(4),
  },
  externalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
  },
  buttonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
  },
  textHelper: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: '500',
    marginBottom: ms(10),
  },
  contentContainer: {
    alignItems: 'center',
  },
  pickButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginVertical: ms(15),
  },
  pickButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
  buttonControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: ms(220),
  },
  fullButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginTop: ms(15),
  },
  fullButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
  documentContainer: {
    alignItems: 'center',
  },
  documentView: {
    alignItems: 'center',
  },
  documentCount: {
    color: Color.NON_ACTIVE_COLOR,
    textAlign: 'center',
    marginTop: ms(5),
    fontSize: ms(12),
    fontWeight: '500',
  },
  document: {
    marginTop: ms(10),
    height: ms(300),
    width: ms(300),
  },
  pageControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: ms(220),
  },
  pageButton: {
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
    marginTop: ms(15),
  },
  pageButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: '500',
  },
});
