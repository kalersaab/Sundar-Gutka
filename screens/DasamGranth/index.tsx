import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { useAng } from "../../Data/ang/query";
import { View, Text } from "../../components/themed";
import * as Animatable from "react-native-animatable";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import InfinitePager, {
  InfinitePagerImperativeApi,
} from "react-native-infinite-pager";
import { fontSize } from "../../constant/layouts/layout";
import { colors } from "../../constant/colors/color";
function Ang({ page, setAngId }: { page: number; setAngId: any }) {
  const ang = useAng(
    { angId: page },
    {
      enabled: page > 0 && page <= 1428,
    }
  );
  const pages = ang.data?.source?.pageNo || [];
  const trans = ang?.data?.page[0].translation.pu?.ss?.unicode || [];

  const [angValue, setAngValue] = useState(page);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Dialog visible={visible}>
          <TextInput
            label="Ang ID"
            focusable
            autoFocus
            keyboardType="number-pad"
            value={`${angValue}`}
            onChangeText={(value) => {
              const parsedQty = Number.parseInt(value);
              if (Number.isNaN(parsedQty)) {
                setAngValue(0); //setter for state
              } else if (parsedQty > 1428 || parsedQty < 1) {
                setAngValue(angValue);
              } else {
                setAngValue(parsedQty);
              }
            }}
          />
          <Button
            onPress={() => {
              setAngId(+angValue);
              setVisible(false);
            }}
          >
            OK
          </Button>
        </Dialog>
      </Portal>
      <Button
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={{ textAlign: "right", padding: 5 }}>Ang: {pages}</Text>
      </Button>
      <FlatList
        style={styles.container}
        data={ang.data?.page}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        renderItem={(page) => (
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {page.item.verse.unicode}
            </Text>
            <Text
              style={{
                color: colors.purple,
                fontSize: fontSize.small,
                textAlign: "center",
              }}
            >
              {page.item.translation.pu?.ss?.unicode}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
const Page = ({ index, setAngId }: { index: number; setAngId: any }) => {
  return <Ang page={index} setAngId={setAngId} />;
};
const slide1 = () => {
  return <Text>First page</Text>;
};
const slide2 = () => {
  return <Text>Second page</Text>;
};
const slide3 = () => {
  return <Text>Third page</Text>;
};

const slides = [slide1, slide2, slide3];
const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];

const loopingSlides = [lastSlide, ...slides, firstSlide];

export default function TabOneScreen() {
  const infinitePager = useRef<InfinitePagerImperativeApi>();

  const [displayPage, setDisplayPage] = useState(false);
  const [displayPortal, setDisplayPortal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplayPortal(false);
    }, 4000);
    setTimeout(async () => {
      let lastang = await AsyncStorage.getItem("lastAng");

      infinitePager.current?.setPage(+lastang, {
        animated: false,
      });
      setDisplayPage(true);
    }, 1000);
    return () => {};
  }, [infinitePager.current]);

  return (
    <View style={styles.flex}>
      <View
        style={{
          display: displayPage ? "flex" : "none",
          flex: 1,
        }}
      >
        <InfinitePager
          ref={infinitePager}
          // PageComponent={Page}
          renderPage={(props) => (
            <Page
              {...props}
              setAngId={async (angId) => {
                infinitePager.current?.setPage(+angId, {
                  animated: false,
                });
              }}
            />
          )}
          style={styles.flex}
          pageWrapperStyle={styles.flex}
          minIndex={1}
          pageBuffer={1}
          onPageChange={(page) => {
            if (page != 0) {
              AsyncStorage.setItem("lastAng", `${page}`);
            }
          }}
        />

        {displayPortal && (
          <Portal>
            <Animatable.View
              duration={4000}
              animation={{
                0: {
                  opacity: 0,
                  backgroundColor: "rgba(0,0,0,1)",
                },
                0.1: {
                  opacity: 1,
                  backgroundColor: "rgba(0,0,0,1)",
                },
                0.9: {
                  opacity: 1,
                  backgroundColor: "rgba(0,0,0,1)",
                },
                1: {
                  opacity: 0,
                  backgroundColor: "rgba(0,0,0,1)",
                },
              }}
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "600",
                  textAlign: "center",
                  alignSelf: "center",
                  color: "white",
                }}
              >
                ਵਾਹਿਗੁਰੂ ਜੀ ਦਾ ਖਾਲਸਾ{"\n"}
                ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਫਤਿਹ
              </Text>
            </Animatable.View>
          </Portal>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 10,
    alignContent: "center",
    backgroundColor: "white",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  flex: { flex: 1 },
});
