import type { LucideIcon } from "lucide-react"
import { Briefcase, GraduationCap, Award, Target, Lightbulb, Users } from "lucide-react"

export type SectionKey = "hero" | "about" | "skills" | "education" | "experience" | "awards" | "goals" | "contact"

export type NavLink = {
  name: string
  href: string
  icon: LucideIcon
}

export type Skill = {
  name: string
  level: string
}

export type Education = {
  institution: string
  degree: string
  period: string
  gpa?: string
}

export type Experience = {
  title: string
  company: string
  period: string
  description: string[]
  type: "experience" | "volunteer"
}

export type Award = {
  name: string
  year: string
}

export type Goal = {
  type: "short-term" | "long-term"
  description: string
}

export type ContactInfo = {
  email: string
  phone: string
  dob: string
  gender: string
  address: string
}

export type PortfolioContent = {
  navLinks: NavLink[]
  hero: {
    title: string
    subtitle: string
    description: string
    cta: {
      downloadCV: string
      contactMe: string
    }
  }
  about: {
    title: string
    description: string[]
  }
  skills: {
    title: string
    categories: {
      name: string
      items: Skill[]
    }[]
  }
  education: {
    title: string
    items: Education[]
  }
  experience: {
    title: string
    items: Experience[]
  }
  awards: {
    title: string
    items: Award[]
  }
  goals: {
    title: string
    items: Goal[]
  }
  contact: {
    title: string
    info: ContactInfo
  }
}

export const content: Record<"vn" | "en", PortfolioContent> = {
  vn: {
    navLinks: [
      { name: "Giới thiệu", href: "#about", icon: Users },
      { name: "Kỹ năng", href: "#skills", icon: Lightbulb },
      { name: "Học vấn", href: "#education", icon: GraduationCap },
      { name: "Kinh nghiệm & Dự án", href: "#experience", icon: Briefcase },
      { name: "Giải thưởng", href: "#awards", icon: Award },
      { name: "Mục tiêu", href: "#goals", icon: Target },
    ],
    hero: {
      title: "Đặng Anh Nhật",
      subtitle: "Chuyên gia Marketing & Truyền thông",
      description:
        "Chào mừng đến với portfolio của tôi! Tôi là một cá nhân năng động, nhiệt huyết và sáng tạo, luôn sẵn sàng cống hiến sức trẻ vào các chiến dịch Marketing - Truyền thông.",
      cta: {
        downloadCV: "Tải CV",
        contactMe: "Liên hệ",
      },
    },
    about: {
      title: "Giới thiệu",
      description: [
        "Được cống hiến sức trẻ và sự sáng tạo trong những chiến dịch Marketing - Truyền Thông. Một cá nhân mang nhiều năng lượng, sự nhiệt huyết trong từng dự án. Mong muốn môi trường làm việc được học hỏi các kiến thức mới về truyền thông. Hoàn thiện các kỹ năng để có thể tìm cơ hội phát triển nghề nghiệp.",
      ],
    },
    skills: {
      title: "Kỹ năng",
      categories: [
        {
          name: "Kỹ năng văn phòng",
          items: [
            { name: "Word", level: "Khá" },
            { name: "Excel", level: "Khá" },
            { name: "PowerPoint", level: "Khá" },
          ],
        },
        {
          name: "Kỹ năng chỉnh sửa video",
          items: [
            { name: "CapCut", level: "Khá" },
            { name: "Adobe Premiere", level: "Cơ bản" },
            { name: "After Effect", level: "Cơ bản" },
          ],
        },
        {
          name: "Kỹ năng Marketing & Truyền thông",
          items: [
            { name: "Sử dụng AI vào môi trường làm việc", level: "Tốt" },
            { name: "Lập kế hoạch và viết bài truyền thông", level: "Tốt" },
            { name: "Xử lý khủng hoảng truyền thông", level: "Tốt" },
            { name: "Sáng tạo video, content creator", level: "Tốt" },
            { name: "Lãnh đạo, dẫn dắt đội nhóm, truyền cảm hứng", level: "Tốt" },
            { name: "Sẵn sàng học hỏi và thích nghi", level: "Tốt" },
          ],
        },
      ],
    },
    education: {
      title: "Học vấn",
      items: [
        {
          institution: "Cao đẳng Hoà Bình Xuân Lộc",
          degree: "Tốt nghiệp Trung cấp Nghiệp vụ nhà hàng",
          period: "8.2018 - 6.2021",
          gpa: "8/10",
        },
        {
          institution: "Đại học Văn Lang",
          degree: "Truyền thông đa phương tiện",
          period: "9.2022 - Hiện tại",
          gpa: "8.10/10",
        },
      ],
    },
    experience: {
      title: "Kinh nghiệm & Dự án",
      items: [
        {
          title: "Crew Leader",
          company: "Jollibee Viet Nam",
          period: "11.2021 - 6.2023",
          description: [
            "Quản lý nhân sự trong ca.",
            "Kiểm soát hàng hoá.",
            "Chịu trách nhiệm chính tại bộ phận Kitchen.",
          ],
          type: "experience",
        },
        {
          title: "CTV Marketing",
          company: "Công ty CP Truyền thông Nexus",
          period: "10.2022 - 3.2024",
          description: [
            "Edit video cho các nội dung.",
            "Hỗ trợ leader, thực hiện các công tác về truyền thông các dự án.",
            "Lập kế hoạch và thực thi công tác truyền thông.",
            "Hỗ trợ bộ phận khác về mặt truyền thông.",
            "Đo lường, đánh giá, kiểm soát hiệu quả truyền thông quảng cáo và đưa ra điều chỉnh.",
            "Quản trị hệ thống kênh online gồm Website, Fanpage.",
            "Onsite tại khu vực sự kiện.",
          ],
          type: "experience",
        },
        {
          title: "CTV",
          company: "Văn Lang TV",
          period: "5.2024 - 7.2025",
          description: [
            "Biên tập chuỗi series “Gặp gỡ nhân vật” và “Stories of inspiration”.",
            "Đạo diễn các video tiểu mục “Nhịp sống Văn Lang”.",
            "Hỗ trợ Quay & Dựng chuỗi series “Gặp gỡ nhân vật” và “Stories of inspiration”.",
            "Lấy tin các sự kiện nổi bật đang diễn ra.",
          ],
          type: "experience",
        },
        {
          title: "Event Crew",
          company: "VPBank Vnexpress Marathon Ho Chi Minh City Midnight 2024 & 2025",
          period: "2024 & 2025",
          description: ["Pen Leader khu vực Xuất phát.", "Kiểm soát các VĐV vào khu vực Xuất phát đúng giờ."],
          type: "volunteer",
        },
        {
          title: "Volunteer Leader Zone D & Zone B",
          company: "Ho Chi Minh City Marathon 2024 & 2025",
          period: "2024 & 2025",
          description: ["Nhóm trưởng TNV.", "Kiểm soát, quan sát TNV trong khu vực."],
          type: "volunteer",
        },
        {
          title: "Assistant Startline",
          company: "Techcombank Ho Chi Minh City International 2023 & 2024",
          period: "2023 & 2024",
          description: ["Giám sát thi công.", "Quản lý khu vực các Pen xuất phát."],
          type: "volunteer",
        },
        {
          title: "Volunteer Leader Zone E",
          company: "Danang International Marathon 2024",
          period: "2024",
          description: ["Nhóm trưởng TNV.", "Kiểm soát, quan sát TNV trong khu vực."],
          type: "volunteer",
        },
      ],
    },
    awards: {
      title: "Giải thưởng",
      items: [
        { name: "Giải Nhất “Môn điền kinh - Hội thao SV”", year: "2025" },
        { name: "Giải Nhất “PR Run”", year: "2024" },
        { name: "Giải Nhì “PR Run”", year: "2023" },
        {
          name: "Giải “quay phim xuất sắc nhất” chương trình Pick Your Team do Văn Lang TV sản xuất",
          year: "N/A",
        },
        { name: "Học bổng năm I và sinh viên giỏi năm", year: "2023" },
      ],
    },
    goals: {
      title: "Mục tiêu",
      items: [
        {
          type: "short-term",
          description:
            "Nhanh chóng thích nghi với môi trường làm việc, nâng cao kỹ năng dựng video và đóng góp hiệu quả vào các dự án nội dung của công ty.",
        },
        {
          type: "long-term",
          description:
            "Trở thành nhân sự chủ lực trong team Marketing, phát triển tư duy kể chuyện hình ảnh và từng bước đảm nhận vai trò lớn hơn trong tương lai.",
        },
      ],
    },
    contact: {
      title: "Liên hệ",
      info: {
        email: "nhatngocdong123@gmail.com",
        phone: "0798396726",
        dob: "17/11/2003",
        gender: "Nam",
        address: "TP.HCM, Việt Nam",
      },
    },
  },
  en: {
    navLinks: [
      { name: "About", href: "#about", icon: Users },
      { name: "Skills", href: "#skills", icon: Lightbulb },
      { name: "Education", href: "#education", icon: GraduationCap },
      { name: "Experience & Projects", href: "#experience", icon: Briefcase },
      { name: "Awards", href: "#awards", icon: Award },
      { name: "Goals", href: "#goals", icon: Target },
    ],
    hero: {
      title: "Dang Anh Nhat",
      subtitle: "Marketing & Communications Specialist",
      description:
        "Welcome to my portfolio! I am an energetic, enthusiastic, and creative individual, always ready to contribute my youth to Marketing - Communications campaigns.",
      cta: {
        downloadCV: "Download CV",
        contactMe: "Contact Me",
      },
    },
    about: {
      title: "About Me",
      description: [
        "Dedicated to contributing youth and creativity to Marketing - Communications campaigns. An individual with abundant energy and enthusiasm in every project. Desiring a work environment where I can learn new communication knowledge. Improving skills to find career development opportunities.",
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Office Skills",
          items: [
            { name: "Word", level: "Proficient" },
            { name: "Excel", level: "Proficient" },
            { name: "PowerPoint", level: "Proficient" },
          ],
        },
        {
          name: "Video Editing Skills",
          items: [
            { name: "CapCut", level: "Proficient" },
            { name: "Adobe Premiere", level: "Basic" },
            { name: "After Effect", level: "Basic" },
          ],
        },
        {
          name: "Marketing & Communication Skills",
          items: [
            { name: "Using AI in the workplace", level: "Good" },
            { name: "Planning and writing communication articles", level: "Good" },
            { name: "Crisis communication management", level: "Good" },
            { name: "Video creation, content creator", level: "Good" },
            { name: "Leadership, team guidance, inspiring community", level: "Good" },
            { name: "Ready to learn and adapt to new environments", level: "Good" },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Hoa Binh Xuan Loc College",
          degree: "Graduated from Restaurant Operations Intermediate",
          period: "8.2018 - 6.2021",
          gpa: "8/10",
        },
        {
          institution: "Van Lang University",
          degree: "Multimedia Communications",
          period: "9.2022 - Present",
          gpa: "8.10/10",
        },
      ],
    },
    experience: {
      title: "Experience & Projects",
      items: [
        {
          title: "Crew Leader",
          company: "Jollibee Viet Nam",
          period: "11.2021 - 6.2023",
          description: [
            "Managed staff during shifts.",
            "Controlled inventory.",
            "Primarily responsible for the Kitchen department.",
          ],
          type: "experience",
        },
        {
          title: "Marketing Collaborator",
          company: "Nexus Communications JSC",
          period: "10.2022 - 3.2024",
          description: [
            "Edited videos for various content.",
            "Supported leader, performed communication tasks for projects.",
            "Planned and executed communication activities.",
            "Supported other departments with communication aspects.",
            "Measured, evaluated, controlled the effectiveness of advertising communication and made adjustments.",
            "Managed online channel systems including Website, Fanpage.",
            "Onsite at event areas.",
          ],
          type: "experience",
        },
        {
          title: "Collaborator",
          company: "Van Lang TV",
          period: "5.2024 - 7.2025",
          description: [
            "Edited the series “Meeting Characters” and “Stories of Inspiration”.",
            "Directed short video segments “Van Lang Life Rhythm”.",
            "Assisted in filming & editing the series “Meeting Characters” and “Stories of Inspiration”.",
            "Collected news on prominent ongoing events.",
          ],
          type: "experience",
        },
        {
          title: "Event Crew",
          company: "VPBank Vnexpress Marathon Ho Chi Minh City Midnight 2024 & 2025",
          period: "2024 & 2025",
          description: ["Pen Leader for the Starting area.", "Ensured athletes entered the Starting area on time."],
          type: "volunteer",
        },
        {
          title: "Volunteer Leader Zone D & Zone B",
          company: "Ho Chi Minh City Marathon 2024 & 2025",
          period: "2024 & 2025",
          description: ["Volunteer Team Leader.", "Controlled and observed volunteers in the area."],
          type: "volunteer",
        },
        {
          title: "Assistant Startline",
          company: "Techcombank Ho Chi Minh City International 2023 & 2024",
          period: "2023 & 2024",
          description: ["Construction supervision.", "Managed the starting pens area."],
          type: "volunteer",
        },
        {
          title: "Volunteer Leader Zone E",
          company: "Danang International Marathon 2024",
          period: "2024",
          description: ["Volunteer Team Leader.", "Controlled and observed volunteers in the area."],
          type: "volunteer",
        },
      ],
    },
    awards: {
      title: "Awards",
      items: [
        { name: "First Prize “Athletics - Student Sports Festival”", year: "2025" },
        { name: "First Prize “PR Run”", year: "2024" },
        { name: "Second Prize “PR Run”", year: "2023" },
        {
          name: "“Best Cinematography” award for the Pick Your Team program produced by Van Lang TV",
          year: "N/A",
        },
        { name: "Scholarship in Year I and Excellent Student in", year: "2023" },
      ],
    },
    goals: {
      title: "Goals",
      items: [
        {
          type: "short-term",
          description:
            "Quickly adapt to the work environment, enhance video editing skills, and effectively contribute to the company's content projects.",
        },
        {
          type: "long-term",
          description:
            "Become a key personnel in the Marketing team, develop visual storytelling thinking, and gradually take on larger roles in the future.",
        },
      ],
    },
    contact: {
      title: "Contact",
      info: {
        email: "nhatngocdong123@gmail.com",
        phone: "0798396726",
        dob: "17/11/2003",
        gender: "Male",
        address: "Ho Chi Minh City, Vietnam",
      },
    },
  },
}
