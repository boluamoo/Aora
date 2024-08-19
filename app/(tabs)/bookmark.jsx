// import { View, Text, FlatList } from "react-native";
// import React, { useEffect } from "react";
// import { useLocalSearchParams } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import useAppWrite from "../../lib/useAppWrite";
// import {
//   getAllPosts,
//   getBookmarkedPosts,
//   searchPosts,
// } from "../../lib/appwrite";
// import SearchInput from "../../components/SearchInput";
// import EmptyState from "../../components/EmptyState";
// import VideoCard from "../../components/VideoCard";
// import { useGlobalContext } from "../../context/GlobalProvider";

// const Bookmark = () => {
//   // const { query } = useLocalSearchParams();
//   const { user } = useGlobalContext();
//   const { data: posts, refetch } = useAppWrite(() =>
//     getBookmarkedPosts()
//   );

//   // useEffect(() => {
//   //   refetch();
//   // }, [query]);

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.$id}
//         renderItem={({ item }) => <VideoCard video={item} />}
//         ListHeaderComponent={() => (
//           <View className="my-6 px-4">
//             <Text className="text-2xl font-psemibold text-white">
//               Saved Videos
//             </Text>
//             <View className="mt-6 mb-8">
//               <SearchInput />
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={() => (
//           <EmptyState
//             title="No Videos Found"
//             subtitle="No videos found for this search query"
//           />
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// export default Bookmark;
