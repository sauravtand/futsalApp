// BookContent.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BookContent() {
  const [searchText, setSearchText] = useState('');

  const handleClearInput = () => {
    setSearchText('');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [isavailModal, setIsAvailModal] = useState(false);

  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: 'red',
        backgroundColor: '#FEFEFE',
        height: 190,
        width: 400,
      }}>
      <View
        style={{
          top: 10,
          borderWidth: 0,
          borderColor: 'black',
          width: 330,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '#F3F3F3',
        }}>
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="Search For Futsal Venues"
          placeholderTextColor={'#000000'}
          style={{
            color: 'black',
            width: 290,
            borderColor: 'black',
            borderWidth: 0,
            paddingLeft: 15,
            fontSize: 12,
          }}
        />
        {searchText ? (
          <TouchableOpacity onPress={handleClearInput}>
            <Icon
              name="times-circle"
              size={20}
              style={{color: '#8D8A8A', left: 10, top: 15}}></Icon>
          </TouchableOpacity>
        ) : (
          <Icon
            name="search"
            size={20}
            style={{color: '#8D8A8A', left: 10, top: 15}}
          />
        )}
      </View>
      <View
        style={{
          borderWidth: 0,
          borderColor: 'black',
          top: 20,
          height: 100,
          width: 350,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#7F7F7F',
              height: 40,
              width: 40,
              left: 15,
              top: 10,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              source={require('../Screens/images/sort.png')}
              style={{height: 20, width: 20, resizeMode: 'cover', top: 7}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsAvailModal(true)}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'black',
              width: 150,
              height: 40,
              left: 30,
              top: 10,
              borderRadius: 10,
              borderColor: '#7F7F7F',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 0,
                borderColor: 'black',
                width: 140,
                flexDirection: 'row',
                height: 40,
              }}>
              <Text style={{color: 'black', top: 5, left: 25}}>
                Availability
              </Text>
              <Image
                source={require('../Screens/images/angledown.png')}
                style={{height: 15, width: 15, left: 45, top: 10}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'black',
              width: 100,
              height: 40,
              left: 50,
              top: 10,
              borderRadius: 10,
              borderColor: '#7F7F7F',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', top: 5}}>Favourite</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{left: 30}}>
        <Text style={{color: '#08C208', fontWeight: 'bold', fontSize: 18}}>
          Venues(128)
        </Text>
      </View>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="fade"
        transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#FEFEFE',
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
            }}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <View
                style={{
                  right: 20,
                  top: -35,
                  borderRadius: 20,
                  backgroundColor: '#FEFEFE',
                  width: 30,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginRight: 10,
                    marginTop: 10,
                    left: 5,
                    top: -6,
                    color: 'black',
                  }}>
                  x
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'center',
                top: -10,
                height: 120,
                width: 350,
                backgroundColor: '#FEFEFE',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                Sort By
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  top: 0,
                  borderWidth: 0,
                  borderColor: 'red',
                  height: 40,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>Popularity</Text>
                <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                  <View
                    style={{
                      height: 25,
                      borderWidth: 2,
                      borderColor: 'black',
                      width: 25,
                      left: 235,
                      borderRadius: 25,
                    }}>
                    {selectedRadio == 1 ? (
                      <View
                        style={{
                          height: 18,
                          borderWidth: 0,
                          borderColor: 'black',
                          width: 18,
                          backgroundColor: '#08C208',
                          borderRadius: 18,
                          top: 1.5,
                          alignSelf: 'center',
                        }}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  top: 5,
                  borderWidth: 0,
                  borderColor: 'red',
                  height: 40,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>Distance</Text>
                <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                  <View
                    style={{
                      height: 25,
                      borderWidth: 2,
                      borderColor: 'black',
                      width: 25,
                      left: 245,
                      borderRadius: 25,
                    }}>
                    {selectedRadio == 2 ? (
                      <View
                        style={{
                          height: 18,
                          borderWidth: 0,
                          borderColor: 'black',
                          width: 18,
                          backgroundColor: '#08C208',
                          borderRadius: 18,
                          top: 1.5,
                          alignSelf: 'center',
                        }}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isavailModal}
        onRequestClose={() => setIsAvailModal(false)}
        transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => setIsAvailModal(false)}>
            <View
              style={{
                right: 20,
                top: -15,
                borderRadius: 20,
                backgroundColor: '#FEFEFE',
                width: 30,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginRight: 10,
                  marginTop: 10,
                  left: 5,
                  top: -6,
                  color: 'black',
                }}>
                x
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 600,
              width: 400,
              marginBottom: 5,
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: '#FEFEFE',
            }}>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#E9E9E9',
                height: 300,
                width: 380,
                alignSelf: 'center',
                top: 20,
                borderRadius: 10,
              }}>
              <Icon
                name="calendar"
                size={20}
                style={{color: '#434343', left: 10, top: 15}}
              />
              <Text style={{left: 40,top:-7,color:'#434343',fontSize:16}}>Check Venue Availability</Text>
              <View style={{borderWidth:2,borderColor:'red',width:350,height:150,top:10,alignSelf:'center'}}>
                <Text>Slot Date</Text>
                <TouchableOpacity>
                  <View style={{}}></View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
