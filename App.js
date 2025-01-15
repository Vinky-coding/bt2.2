import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
z
const notifications = [
  {
    id: '1',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png', 
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
  },
  {
    id: '2',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '3',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    title: 'Khách hàng được chia sẻ bị trùng',
    description:
      'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '4',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    title: 'Khách hàng được thêm bị trùng',
    description:
      'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '5',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '6',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
    title: 'Công việc đã quá hạn',
    description:
      'Bạn có 17 công việc đã quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
  },
];

const NotificationList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationList;