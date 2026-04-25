export type Language = 'en' | 'ar';

export const translations = {
  en: {
    userName: "Yasser Elgamal",
    userPhone: "+20 155 155 8228",
    nav: {
      metrics: "Metrics",
      expertise: "Expertise",
      portfolio: "Portfolio",
      innovation: "Innovation",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Executive Leadership & Consulting",
      title: "Architecting the Future of Telecom Operations",
      subtitle: "Strategic leader specializing in Fiber Optic infrastructure, OSS transformation, and the integration of Generative AI to drive operational excellence in global telecommunications networks.",
      ctaPortfolio: "View Strategic Portfolio",
      ctaCV: "Executive CV",
      expYears: "Years Experience",
      capexManaged: "CAPEX Managed",
      opexReduction: "OpEx Reduction",
    },
    metrics: {
      title: "Executive Impact & Metrics",
      subtitle: "Quantifiable results delivered across international telecom operations, focusing on scalability, efficiency, and digital transformation.",
      opexReduction: "OpEx Reduction",
      opexDesc: "Annualized operational cost saving",
      infraScale: "Infrastructure Scale",
      infraDesc: "Fiber home-passed deployments",
      aiEfficiency: "AI Efficiency",
      aiDesc: "Reduction in fault resolution time",
      strategicWins: "Strategic Wins",
      strategicDesc: "Multi-million dollar digital transforms",
      trendTitle: "OpEx Reduction Trend",
      trendSub: "Year-over-year cost optimization (%)",
      aiTitle: "AI Operational Impact",
      aiSub: "Automation vs Manual Processes",
      aiDriven: "AI Driven",
    },
    expertise: {
      title: "Core Expertise Pillars",
      subtitle: "A multidisciplinary approach combining deep physical layer knowledge with cutting-edge software orchestration and AI.",
      fiberTitle: "Fiber Optics & Infrastructure",
      fiberDesc: "Deep technical leadership in large-scale optical network deployments and strategic infrastructure planning.",
      ossTitle: "OSS & Operational Excellence",
      ossDesc: "Transforming legacy Operations Support Systems into agile, automated environments for maximum reliability.",
      aiTitle: "AI-Driven Telecom Innovation",
      aiDesc: "Pioneering the integration of Generative AI and AIOps to move from reactive to predictive network management.",
    },
    projects: {
      title: "Strategic Case Studies",
      subtitle: "A deep dive into high-impact initiatives delivered using the S.T.A.R. methodology.",
      deepDive: "Deep Dive",
      situation: "Situation",
      task: "Task",
      action: "Action",
      result: "Result",
      items: [
        {
          id: "ftth-rollout",
          title: "Nationwide FTTH Strategic Rollout",
          category: "Infrastructure",
          summary: "Large-scale fiber deployment increasing connectivity for 250k+ households.",
          tags: ["FTTH", "CAPEX Optimization", "Strategic Planning"],
          star: {
            situation: "The legacy copper infrastructure was suffering from high maintenance costs and declining customer satisfaction due to limited bandwidth.",
            task: "Lead the strategic rollout of Fiber-to-the-Home (FTTH) for 250,000 premises within a strict 24-month window while optimizing a $200M CAPEX budget.",
            action: "Redesigned the network topology to reduce fiber wastage, established a strategic partnership with tier-1 vendors to lower hardware costs by 15%, and implemented a phased agile deployment model.",
            result: "Completed the rollout 2 months ahead of schedule and 10% under budget, resulting in a 20% increase in Average Revenue Per User (ARPU) within the first year."
          }
        },
        {
          id: "oss-transformation",
          title: "OSS Orchestration Transformation",
          category: "OSS",
          summary: "Migrating legacy siloed systems to a cloud-native unified orchestration layer.",
          tags: ["Cloud-Native", "Automation", "Service Delivery"],
          star: {
            situation: "Service provisioning was managed through multiple fragmented legacy systems, leading to a 48-hour lag in service activation and high manual error rates.",
            task: "Architect and implement a unified OSS orchestration layer to automate the end-to-end service delivery lifecycle.",
            action: "Led a cross-functional team of 40 engineers to migrate legacy workflows to a cloud-native orchestrator, implementing CI/CD for network services and automating 70% of manual tasks.",
            result: "Reduced service activation time from 48 hours to 15 minutes and decreased operational expenditures (OpEx) by 12% annually."
          }
        },
        {
          id: "ai-predictive-maintenance",
          title: "AI-Driven Predictive Maintenance",
          category: "AI",
          summary: "Implementing ML models to predict network failures before they impact customers.",
          tags: ["AIOps", "Machine Learning", "Network Reliability"],
          star: {
            situation: "The network was operating on a reactive maintenance model, where faults were only addressed after customer complaints, leading to high churn.",
            task: "Develop and deploy an AI-based predictive maintenance system to identify potential failures in the optical transport network before they occur.",
            action: "Integrated real-time telemetry data from DWDM equipment into a custom ML pipeline, training models on 5 years of historical failure data to identify early-warning patterns.",
            result: "Achieved a 30% reduction in unplanned outages and improved the Mean Time to Repair (MTTR) by 25% through proactive dispatching."
          }
        }
      ]
    },
    innovation: {
      title: "Telecom Innovation Hub",
      subtitle: "Beyond operational management, I focus on the convergence of AI and Telecommunications. My vision is the transition from deterministic networks to intent-based, autonomous systems.",
      thoughtLeadership: "Thought Leadership in AIOps",
      items: [
        {
          title: "Autonomous Network Healing",
          desc: "Utilizing LLMs and Reinforcement Learning to create 'Self-Healing' networks that resolve 60% of Level-1 faults without human intervention.",
          impact: "Reduced MTTR by 45%"
        },
        {
          title: "AI-Optimized Spectrum Management",
          desc: "Dynamic allocation of network resources based on real-time predictive traffic patterns using Deep Learning models.",
          impact: "15% Increase in Spectral Efficiency"
        },
        {
          title: "Generative AI for Field Ops",
          desc: "Implementing AI assistants for field technicians to query complex network documentation and receive instant, context-aware troubleshooting guides.",
          impact: "30% Faster On-site Resolution"
        },
        {
          title: "Predictive CAPEX Planning",
          desc: "Applying time-series forecasting to predict infrastructure saturation points, ensuring just-in-time deployment of new fiber nodes.",
          impact: "10% Reduction in Idle CAPEX"
        }
      ]
    },
    certifications: {
      title: "Professional Certifications",
      subtitle: "Continuous learning and industry-recognized validation of technical and leadership expertise.",
      items: [
        { name: "PMP - Project Management Professional", issuer: "PMI" },
        { name: "CCNA - Cisco Certified Network Associate", issuer: "Cisco" },
        { name: "ITIL Foundation", issuer: "AXELOS" },
        { name: "Advanced Fiber Optics Certification", issuer: "Industry Standard" },
        { name: "AI in Telecom Specialization", issuer: "Professional Certification" },
        { name: "Strategic Leadership Program", issuer: "Executive Education" }
      ]
    },
    contact: {
      title: "Let's Connect for Strategic Synergy",
      subtitle: "I am open to executive leadership roles, strategic consulting engagements, and international partnerships in the telecom and AI sectors.",
      email: "Email",
      linkedin: "LinkedIn",
      facebook: "Facebook",
      phone: "Phone",
      location: "Location",
      downloadCV: "Download Executive Portfolio (PDF)",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Message",
      formPlaceholder: "Your message here...",
      formSend: "Send Message",
    },
    footer: {
      copyright: "Executive Telecom Portfolio. All rights reserved.",
    }
  },
  ar: {
    userName: "ياسر الجمل",
    userPhone: "+20 155 155 8228",
    nav: {
      metrics: "المؤشرات",
      expertise: "الخبرات",
      portfolio: "المشاريع",
      innovation: "الابتكار",
      contact: "اتصل بي",
    },
    hero: {
      badge: "متاح للقيادة التنفيذية والاستشارات",
      title: "هندسة مستقبل عمليات الاتصالات",
      subtitle: "قائد استراتيجي متخصص في بنية الألياف الضوئية، وتحول أنظمة الدعم التشغيلي (OSS)، ودمج الذكاء الاصطناعي التوليدي لتعزيز التميز التشغيلي في شبكات الاتصالات العالمية.",
      ctaPortfolio: "عرض الملف الاستراتيجي",
      ctaCV: "السيرة الذاتية التنفيذية",
      expYears: "سنوات خبرة",
      capexManaged: "إدارة النفقات الرأسمالية",
      opexReduction: "تقليل النفقات التشغيلية",
    },
    metrics: {
      title: "الأثر التنفيذي والمؤشرات",
      subtitle: "نتائج ملموسة تم تحقيقها في عمليات الاتصالات الدولية، مع التركيز على القابلية للتوسع، والكفاءة، والتحول الرقمي.",
      opexReduction: "تقليل النفقات التشغيلية",
      opexDesc: "توفير سنوي في التكاليف التشغيلية",
      infraScale: "نطاق البنية التحتية",
      infraDesc: "عمليات نشر الألياف الضوئية للمنازل",
      aiEfficiency: "كفاءة الذكاء الاصطناعي",
      aiDesc: "تقليل وقت حل الأعطال",
      strategicWins: "نجاحات استراتيجية",
      strategicDesc: "تحولات رقمية بملايين الدولارات",
      trendTitle: "اتجاه تقليل النفقات التشغيلية",
      trendSub: "تحسين التكاليف السنوي (%)",
      aiTitle: "أثر الذكاء الاصطناعي التشغيلي",
      aiSub: "الأتمتة مقابل العمليات اليدوية",
      aiDriven: "مدعوم بالذكاء الاصطناعي",
    },
    expertise: {
      title: "ركائز الخبرة الأساسية",
      subtitle: "نهج متعدد التخصصات يجمع بين المعرفة العميقة بالطبقة الفيزيائية وتنسيق البرمجيات المتطور والذكاء الاصطناعي.",
      fiberTitle: "الألياف الضوئية والبنية التحتية",
      fiberDesc: "قيادة تقنية عميقة في عمليات نشر الشبكات الضوئية واسعة النطاق والتخطيط الاستراتيجي للبنية التحتية.",
      ossTitle: "OSS والتميز التشغيلي",
      ossDesc: "تحويل أنظمة الدعم التشغيلي التقليدية إلى بيئات مرنة ومؤتمتة لتحقيق أقصى قدر من الموثوقية.",
      aiTitle: "ابتكارات الاتصالات المدعومة بالذكاء الاصطناعي",
      aiDesc: "ريادة دمج الذكاء الاصطناعي التوليدي وAIOps للانتقال من الإدارة التفاعلية إلى الإدارة التنبؤية للشبكة.",
    },
    projects: {
      title: "دراسات حالة استراتيجية",
      subtitle: "تحليل عميق للمبادرات عالية الأثر المنفذة باستخدام منهجية S.T.A.R.",
      deepDive: "تحليل عميق",
      situation: "الموقف",
      task: "المهمة",
      action: "الإجراء",
      result: "النتيجة",
      items: [
        {
          id: "ftth-rollout",
          title: "النشر الاستراتيجي الوطني للألياف الضوئية FTTH",
          category: "Infrastructure",
          summary: "نشر واسع النطاق للألياف الضوئية لزيادة الاتصال لأكثر من 250 ألف منزل.",
          tags: ["FTTH", "تحسين النفقات الرأسمالية", "التخطيط الاستراتيجي"],
          star: {
            situation: "كانت البنية التحتية النحاسية القديمة تعاني من تكاليف صيانة عالية وانخفاض في رضا العملاء بسبب محدودية النطاق الترددي.",
            task: "قيادة النشر الاستراتيجي للألياف الضوئية للمنازل (FTTH) لـ 250,000 وحدة سكنية خلال نافذة زمنية صارمة مدتها 24 شهراً مع تحسين ميزانية رأسمالية قدرها 200 مليون دولار.",
            action: "إعادة تصميم طبولوجيا الشبكة لتقليل هدر الألياف، وإقامة شراكة استراتيجية مع موردين من الفئة الأولى لخفض تكاليف الأجهزة بنسبة 15%، وتطبيق نموذج نشر مرن ومرحلي.",
            result: "اكتمل النشر قبل الموعد المحدد بشهرين وبأقل من الميزانية بنسبة 10%، مما أدى إلى زيادة بنسبة 20% في متوسط الإيرادات لكل مستخدم (ARPU) خلال السنة الأولى."
          }
        },
        {
          id: "oss-transformation",
          title: "تحول تنسيق أنظمة الدعم التشغيلي OSS",
          category: "OSS",
          summary: "نقل الأنظمة التقليدية المنعزلة إلى طبقة تنسيق موحدة سحابية.",
          tags: ["سحابية", "أتمتة", "تقديم الخدمات"],
          star: {
            situation: "كانت عمليات تفعيل الخدمات تدار عبر أنظمة تقليدية متعددة ومجزأة، مما أدى إلى تأخير في التفعيل لمدة 48 ساعة ومعدلات خطأ يدوية عالية.",
            task: "تصميم وتنفيذ طبقة تنسيق OSS موحدة لأتمتة دورة حياة تقديم الخدمة من البداية إلى النهاية.",
            action: "قيادة فريق متعدد الوظائف من 40 مهندساً لنقل تدفقات العمل التقليدية إلى منسق سحابي، وتطبيق منهجية CI/CD لخدمات الشبكة وأتمتة 70% من المهام اليدوية.",
            result: "تقليل وقت تفعيل الخدمة من 48 ساعة إلى 15 دقيقة وخفض النفقات التشغيلية (OpEx) بنسبة 12% سنوياً."
          }
        },
        {
          id: "ai-predictive-maintenance",
          title: "الصيانة التنبؤية المدعومة بالذكاء الاصطناعي",
          category: "AI",
          summary: "تنفيذ نماذج تعلم الآلة للتنبؤ بأعطال الشبكة قبل تأثيرها على العملاء.",
          tags: ["AIOps", "تعلم الآلة", "موثوقية الشبكة"],
          star: {
            situation: "كانت الشبكة تعمل بنموذج صيانة تفاعلي، حيث يتم التعامل مع الأعطال فقط بعد شكاوى العملاء، مما أدى إلى ارتفاع معدلات فقدان المشتركين.",
            task: "تطوير ونشر نظام صيانة تنبؤي قائم على الذكاء الاصطناعي لتحديد الإخفاقات المحتملة في شبكة النقل الضوئي قبل وقوعها.",
            action: "دمج بيانات القياس عن بعد في الوقت الفعلي من معدات DWDM في خط معالجة ML مخصص، وتدريب النماذج على بيانات الأعطال التاريخية لخمس سنوات لتحديد أنماط الإنذار المبكر.",
            result: "تحقيق انخفاض بنسبة 30% في الانقطاعات غير المخطط لها وتحسين متوسط وقت الإصلاح (MTTR) بنسبة 25% من خلال الإرسال الاستباقي للفنيين."
          }
        }
      ]
    },
    innovation: {
      title: "مركز ابتكارات الاتصالات",
      subtitle: "بعيداً عن الإدارة التشغيلية، أركز على تقارب الذكاء الاصطناعي والاتصالات. رؤيتي هي الانتقال من الشبكات الحتمية إلى أنظمة ذاتية التشغيل قائمة على النوايا.",
      thoughtLeadership: "قيادة فكرية في AIOps",
      items: [
        {
          title: "الشفاء الذاتي للشبكة",
          desc: "استخدام النماذج اللغوية الكبيرة (LLMs) والتعلم التعزيزي لإنشاء شبكات 'ذاتية الشفاء' تحل 60% من أعطال المستوى الأول دون تدخل بشري.",
          impact: "تقليل MTTR بنسبة 45%"
        },
        {
          title: "إدارة الطيف المحسنة بالذكاء الاصطناعي",
          desc: "التخصيص الديناميكي لموارد الشبكة بناءً على أنماط حركة المرور التنبؤية في الوقت الفعلي باستخدام نماذج التعلم العميق.",
          impact: "زيادة كفاءة الطيف بنسبة 15%"
        },
        {
          title: "الذكاء الاصطناعي التوليدي للعمليات الميدانية",
          desc: "تنفيذ مساعدين ذكاء اصطناعي للفنيين الميدانيين للاستعلام عن وثائق الشبكة المعقدة وتلقي أدلة استكشاف الأخطاء وإصلاحها فورية وسياقية.",
          impact: "تسريع الحل الميداني بنسبة 30%"
        },
        {
          title: "التخطيط التنبؤي للنفقات الرأسمالية",
          desc: "تطبيق التنبؤ بالسلاسل الزمنية لتوقع نقاط تشبع البنية التحتية، مما يضمن النشر في الوقت المناسب لعقد الألياف الجديدة.",
          impact: "تقليل النفقات الرأسمالية غير المستغلة بنسبة 10%"
        }
      ]
    },
    certifications: {
      title: "الشهادات المهنية",
      subtitle: "تعلم مستمر واعتماد صناعي للخبرات التقنية والقيادية.",
      items: [
        { name: "PMP - محترف إدارة المشاريع", issuer: "PMI" },
        { name: "CCNA - شهادة سيسكو المعتمدة في الشبكات", issuer: "Cisco" },
        { name: "ITIL Foundation", issuer: "AXELOS" },
        { name: "شهادة متقدمة في الألياف الضوئية", issuer: "معيار الصناعة" },
        { name: "تخصص الذكاء الاصطناعي في الاتصالات", issuer: "شهادة مهنية" },
        { name: "برنامج القيادة الاستراتيجية", issuer: "تعليم تنفيذي" }
      ]
    },
    contact: {
      title: "دعنا نتواصل لتحقيق تكامل استراتيجي",
      subtitle: "أنا منفتح على الأدوار القيادية التنفيذية، وتعاقدات الاستشارات الاستراتيجية، والشراكات الدولية في قطاعي الاتصالات والذكاء الاصطناعي.",
      email: "البريد الإلكتروني",
      linkedin: "لينكد إن",
      facebook: "فيسبوك",
      phone: "الهاتف",
      location: "الموقع",
      downloadCV: "تحميل الملف التنفيذي (PDF)",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "الرسالة",
      formPlaceholder: "اكتب رسالتك هنا...",
      formSend: "إرسال الرسالة",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة لملف الاتصالات التنفيذي.",
    }
  }
};