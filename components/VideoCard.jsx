import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import { ResizeMode, Video } from "expo-av";
import { addToBookmarks } from "../lib/appwrite";
import { useGlobalContext } from "../context/GlobalProvider";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    $id,
    creator: { username, avatar },
  },
}) => {
  const { user } = useGlobalContext();
  const [play, setPlay] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const handleAddBookmark = async () => {
    try {
      await addToBookmarks(user.$id, $id);
      Alert.alert("Added to bookmarks!");
    } catch (error) {
      console.error(error);
      Alert.alert("Failed to add to bookmarks");
    }
  };

  return (
    <View className="items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="relative pt-2">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowOption(!showOption)}
          >
            <Image
              source={icons.menu}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
          {showOption && (
            <View
              className="absolute top-9 right-0 bg-[#1E1E2D] border border-[#232533] py-[9px] px-4 w-[120px] rounded-[5px]"
              style={{ zIndex: 10 }}
            >
              <TouchableOpacity
                className="flex flex-row gap-[5px] items-center"
                onPress={handleAddBookmark}
              >
                <Image
                  source={icons.bookmark}
                  className="w-3 h-3"
                  resizeMode="contain"
                />
                <Text className="text-white text-sm text-center">Bookmark</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onError={(error) => {
            console.log("Video error:", error);
          }}
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true);
          }}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 rounded-xl mt-3 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
